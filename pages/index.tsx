import React from "react";
import styles from './home.module.css'
import Navbar from '../components/navbar/navbar'
import PasswordForm from '../components/password_form/passwordForm'
const Home = () : JSX.Element => {
  return (
    <div className={styles.home}>
      <Navbar currentPage="Home" />
      <PasswordForm level={0}/>
    </div>
  )
}

export default Home
