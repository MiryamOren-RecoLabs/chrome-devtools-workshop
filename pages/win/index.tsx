import type { NextComponentType, NextPage } from 'next'
import React, { useEffect, useState } from "react";
import Navbar from '../../components/navbar/navbar'
import styles from './win.module.css'
import Confetti from 'react-dom-confetti';
import levelsConfig from '../../levelsConfig';
import { passwordMatch } from '../../utils/levelsUtils';;

const confettiConfig = {
  angle: 90,
  spread: 250,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 2000,
  stagger: 2,
  width: "15px",
  height: "15px",
  perspective: "800px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const WinStatus: NextPage = () => {
    // TODO: Check if actually won all the levels based on the cookie.
    const [won, setWon] = useState(true);
    const [showConfetti, setShowConfetti] = React.useState(false);
    useEffect(() => {
      for (let i = 0; i <= levelsConfig.length; i++) {
        setWon(Boolean(passwordMatch(i) || i === 0));
      };
      const interval = setInterval(() => {
        setShowConfetti((prev: boolean) => !prev);
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className={styles.winScreenContainer}>
        <Navbar currentPage={won && passwordMatch(levelsConfig.length) ? "You won!" : "Solve more levels!"}/>
        {won && passwordMatch(levelsConfig.length)? 
          <div className={styles.winScreen}>
            <Confetti active={ showConfetti } config={ confettiConfig }/>
            <br />
            <h1>🏆 Yay! You won! 🏆</h1>
            <br />
            <p >Screenshot this screen and <a href="mailto:miryamoren360@gmail.com">send it to Miryam!</a></p>
            
          </div>
          :
          <div className={styles.winScreen}>
            {`You haven't finished all the levels yet! 🤨`}
          </div>
        } 
        </div>
    )
  }
  
export default WinStatus
  