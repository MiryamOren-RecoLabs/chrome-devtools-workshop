import type { NextComponentType, NextPage } from 'next'
import React, { useEffect } from "react";
import Navbar from '../components/navbar/navbar'
import styles from './levels.module.css'
import Confetti from 'react-dom-confetti';

const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 2000,
  stagger: 2,
  width: "10px",
  height: "10px",
  perspective: "300px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const WinStatus: NextPage = () => {
    // TODO: Check if actually won all the levels based on the cookie.
    const won = true;
    const [showConfetti, setShowConfetti] = React.useState(false);
    useEffect(() => { setInterval(() => {setShowConfetti((prev: boolean) => !prev) }, 1000)}, []);
    return (
      <div className={styles.levels}>
        <Navbar currentPage={won ? "You won!" : "Solve more levels!"}/>
        {won ? 
          <div className={styles.levelsContainer}>
            <Confetti active={ showConfetti } config={ confettiConfig }/>
            <br />
            <h2>🏆 Yay! You won! 🏆</h2>
            <br />
            <p>Screenshot this screen and <a href="mailto:miryamoren360@gmail.com">send it to Miryam</a>!</p>
            
          </div>
          :
          <div className={styles.levelsContainer}>
            {`You haven't finished all the levels yet! 🙄`}
          </div>
        } 
        </div>
    )
  }
  
export default WinStatus
  