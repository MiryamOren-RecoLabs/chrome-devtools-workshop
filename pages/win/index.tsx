import type { NextComponentType, NextPage } from 'next'
import React, { useEffect, useState } from "react";
import Navbar from '../../components/navbar/navbar'
import styles from './win.module.css'
import Confetti from 'react-dom-confetti';
import levelsConfig from '../../levelsConfig';
import { passwordMatch } from '../../utils/levelsUtils';;
import LinkedinIcon from '../../images/share-via-linkedin.png'
import TwitterIcon from '../../images/share-via-twitter.png'
import Image from "next/image";

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

const customLoader = ({ src }: { src: string}) => {
  return src
}

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
            <div className={styles.ShareButtons}>
             <a 
              href={`https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fwww.learnchromedev.tools%2Fwin%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=I%20just%20won%20the%20online%20challenge%20%23LearnChromeDevtools%0ATry%20it%20too%21&url=https%3A%2F%2Fwww.learnchromedev.tools%2F&`} 
              target="_blank"
              rel="noopener noreferrer"
             >
              <span>Share via Twitter</span>
              <Image
                src={TwitterIcon}
                loader={customLoader}
                unoptimized
                alt="twitter-icon"
                height="25"
                width="25"
              />
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.learnchromedev.tools%2F&`} 
              target="_blank"
              rel="noopener noreferrer"
             >
              <span>Share via Linkedin</span>
              <Image
                src={LinkedinIcon}
                loader={customLoader}
                unoptimized
                alt="linkedin-icon"
                height="25"
                width="25"
              />
            </a>
             </div>
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
  