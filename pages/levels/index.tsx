import type { NextComponentType, NextPage } from 'next'
import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from "react";
import Link from "next/link"
import levelsConfig from '../../levelsConfig'
import Image from "next/image";
import Navbar from '../../components/navbar/navbar'
import styles from './levels.module.css'
import mainImageBackgroundStyles from '../../styles/common.module.css'
import { passwordMatch } from '../../utils/levelsUtils';

const customLoader = ({ src }: { src: string}) => {
  return src
}
interface LevelBlockProps {
  levelIndex: number;
  tab: string;
  icon: StaticImageData;
  description?: string;
}

const LevelBlock = ({ levelIndex, tab, icon, description }: LevelBlockProps ): JSX.Element => {
  const [disabled, setDisabled] = useState<boolean | null>(null);
  useEffect(() => {
    setDisabled(!passwordMatch(levelIndex) && levelIndex !== 0);
  })
  return (
    <div className={`${styles.levelBlock} ${disabled? styles.disabledLevelBlock: ""}`}>
      <Link href={`/levels/${tab.toLowerCase()}/level${levelIndex}`}>
        <span>
          <span>{levelIndex}</span>
          <Image src={icon} loader={customLoader} unoptimized/>
        </span>
      </Link>
    </div>
  )
}

const Levels: NextPage = () => {
    return (
      <div className={`${styles.levels} ${mainImageBackgroundStyles.mainImageBackground}`}>
        <Navbar currentPage="Levels"/>
        <div className={styles.levelsContainer}>
          {levelsConfig.map(level => <LevelBlock key={level.levelIndex} {...level} />)}
        </div>
      </div>
    )
  }
  
export default Levels
  