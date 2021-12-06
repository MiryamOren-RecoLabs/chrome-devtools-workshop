import React from "react";
import styles from './home.module.css'
import Navbar from '../components/navbar/navbar'

const Home = () : JSX.Element => {
  return (
    <div className={styles.home}>
      <Navbar currentPage="Home" />
    </div>
  )
}

export default Home
