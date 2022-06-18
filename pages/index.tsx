import React from "react";
import styles from './home.module.css'
import mainImageBackgroundStyles from '../styles/common.module.css'
import Navbar from '../components/navbar/navbar'
import Link from "next/link"
import Head from 'next/head'

const Home = () : JSX.Element => {
  return (
    <div className={`${styles.home} ${mainImageBackgroundStyles.mainImageBackground}`}>
      <Head>
        <title>Learn Chrome Devtools</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/6507/6507424.png" />

        <meta property='og:title' content='Learn Chrome Devtools'/>
        <meta property='og:image' content='https://i.postimg.cc/28QBf8HK/image.png'/>
        <meta property='og:description' content='Online challenge to improve your Chrome Devtools usage and understanding'/>
        <meta property="og:type" content="website"/>
        <meta property='og:url' content='//www.learnchromedev.tools/'/>
        <meta property="og:site_name" content="learnchromedev.tools"></meta>

        <meta name="twitter:title" content="Learn Chrome Devtools"></meta>
        <meta name="twitter:site" content="@MFromTheRiver" />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:description" content="Online challenge to improve your Chrome Devtools usage and understanding"></meta>
        <meta name="twitter:image" content="https://i.postimg.cc/1RkcYy2N/chrome-devtools-1x1-pic.jpg"></meta>
      </Head>
      <Navbar currentPage="Home" />
      <div className={styles.main}>
        <h1>Chrome devtools Workshop</h1>
        <h2>Play, debug and understand websites</h2>
        <Link href="/levels/welcome/level0/" passHref>
          <span className={styles.mainButton}>
            Go to the game 
            <span className={styles.animatedSpan}></span>{` >`}
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Home
