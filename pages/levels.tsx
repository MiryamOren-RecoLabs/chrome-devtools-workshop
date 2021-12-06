import type { NextComponentType, NextPage } from 'next'
import React from "react";
import Link from "next/link"
import Elements from '../images/tab-icons/Elements.png'
import Console from '../images/tab-icons/Console.png'
import Network from '../images/tab-icons/Network.png'
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

const levels = [
  {
    levelIndex: 1,
    tab: "Elements",
    icon: Elements,
    description: ""
  },
  {
    levelIndex: 2,
    tab: "Elements",
    icon: Elements,
    description: ""
  },
  {
    levelIndex: 3,
    tab: "Console",
    icon: Console,
    description: ""
  },
  {
    levelIndex: 4,
    tab: "Console",
    icon: Console,
    description: ""
  },
  {
    levelIndex: 5,
    tab: "Network",
    icon: Network,
    description: ""
  },
  {
    levelIndex: 6,
    tab: "Network",
    icon: Network,
    description: ""
  },
];

const Levels: NextPage = () => {
    return (
      <div className={styles.levels}>
        <Navbar currentPage="Levels"/>
        <div className={styles.levelsContainer}>
          {levels.map(level => <LevelBlock key={level.levelIndex} {...level}/>)}
        </div>
      </div>
    )
  }
  
export default Levels
  