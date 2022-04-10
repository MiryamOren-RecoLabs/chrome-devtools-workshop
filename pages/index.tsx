import React from "react";
import styles from './home.module.css'
import mainImageBackgroundStyles from '../styles/common.module.css'
import Navbar from '../components/navbar/navbar'
import Link from "next/link"

const Home = () : JSX.Element => {
  return (
    <div className={`${styles.home} ${mainImageBackgroundStyles.mainImageBackground}`}>
      <Navbar currentPage="Home" />
      <div className={styles.main}>
        <h1>Chrome devtools Workshop</h1>
        <h2>Play, debug and understand websites</h2>
        <Link href="/levels/welcome/level0/" ><span className={styles.mainButton}>Go to the game <span className={styles.animatedSpan}></span>{` >`}</span></Link>
      </div>
    </div>
  )
}

export default Home
