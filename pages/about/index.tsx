import React, { useLayoutEffect } from "react";
import Navbar from '../../components/navbar/navbar'
import styles from './about.module.css'
import {  useEffect, useState } from 'react'

const About = () : JSX.Element => {
  const [photoDimensions, setPhotoDimensions] = useState<{height: number, width: number}>({ width:625, height:700 });
  function getWindowDimensions() {
    if (typeof window === 'object') {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }
  } 
  const calcPhotoDimensions = (): {height: number, width: number} => {
    const windowDimensions = getWindowDimensions();
      if (((windowDimensions!.width / 2) * 1.12 ) > (windowDimensions!.height - 75)) {
        return({ height: (windowDimensions!.height - 75), width: ((windowDimensions!.height - 75) * 0.892) })
      } else {
        return({ height: ((windowDimensions!.width/2) * 1.12), width: (windowDimensions!.width / 2) })
      }
  }
  useLayoutEffect(() => {
    setPhotoDimensions(calcPhotoDimensions);
    function handleResize() {
      setPhotoDimensions(calcPhotoDimensions);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className={styles.about}>
      <Navbar currentPage="About" />
      <div className={styles.main}>
        <img src="https://i.postimg.cc/RhPZ7jkH/profile.png" 
          width={photoDimensions.width}
          height={photoDimensions.height}/> 
        <div>
            <h1>{`Hi👋 I'm Miryam Oren`}</h1>
            <h2> Front-end developer, sci-fi geek, sing in a choir 🤖🎶</h2>
            <h2>Feel free to contact me!</h2>
            <h2><a href="mailto:miryamoren360@gmail.com">✉️ miryamoren360@gmail.com</a></h2>
        </div>
      </div>
    </div>
  )
}

export default About