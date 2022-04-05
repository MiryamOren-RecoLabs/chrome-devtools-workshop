import type { NextComponentType, NextPage } from 'next'
import { StaticImageData } from 'next/image';
import React from "react";
import Link from "next/link"
import levelsConfig from '../levelsConfig'
import Image from "next/image";
import Navbar from '../components/navbar/navbar'
import styles from './levels.module.css'

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
  return (
    <div className={styles.levelBlock}>
      <Link href={`/levels/${tab.toLowerCase()}/level${levelIndex}`}>
        <span>
          <span>{levelIndex}</span>
          <Image src={icon} loader={customLoader}/>
        </span>
      </Link>
    </div>
  )
}

const Levels: NextPage = () => {
    return (
      <div className={styles.levels}>
        <Navbar currentPage="Levels"/>
        <div className={styles.levelsContainer}>
          {levelsConfig.map(level => <LevelBlock key={level.levelIndex} {...level}/>)}
        </div>
      </div>
    )
  }
  
export default Levels
  