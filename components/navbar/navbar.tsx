import React from "react";
import Link from "next/link"
import styles from './navbar.module.css'
import CustomHead from "../head";

interface NavbarProps {
    currentPage: string;
}
const pages = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Levels",
        path: "/levels"
    },
    {
        title: "About",
        path: "/about"
    },
]
const Navbar = ({ currentPage }: NavbarProps): JSX.Element => {
  return (
    <div className={`${styles.navbar}`}>
        <CustomHead />
        {currentPage && <span className={styles.currentPage}>{currentPage}</span>}
        <div className={styles.links}>
            {pages.map(page => <Link href={page.path} key={page.title}>{page.title}</Link>)}
        </div>
    </div>
  )
}

export default Navbar