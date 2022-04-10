import { useEffect, useState } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"
import axios from 'axios'
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from "../../../components/next_level_popup/nextLevel"

const CURRENT_LEVEL = 8;

const level8Hints: string[] = [
    `<img src="https://i.postimg.cc/yx9DNKT7/level8-hint.png" width="100%" >`
];

const randomIntFromInterval= (min: number, max: number) : number => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const OneRandomImage = (): JSX.Element => (
    <div style={{display: "none"}}>
        <img src={`https://picsum.photos/${randomIntFromInterval(1,7) * 100}/${randomIntFromInterval(1,7) * 100}`}/>
    </div>
);

const SixRandomImagesAndPassword = (): JSX.Element => (
    <div style={{display: "none"}}>
        <OneRandomImage />
        <OneRandomImage />
        <OneRandomImage />
        <img alt="password" src="https://i.postimg.cc/sfZD7ZPL/photo.png"/>
        <OneRandomImage />
        <OneRandomImage />
        <OneRandomImage />
    </div>
);

const CurrentLevel = (): JSX.Element => {
    const [fetchImages, setFetchImages] = useState(false);
    const getDistractions = async (resourcesNumber: number) => {
        // fetching random resources
        for (let i = 1; i < resourcesNumber + 1; i++) {
            try {
                await axios.get(`https://jsonplaceholder.typicode.com/todos/${i}`);
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        getDistractions(30);
        setInterval(() => {
            getDistractions(1);
            setFetchImages(prevState => !prevState);
        }, 2000);
        setTimeout(()=> {

        })
    }, []);

    return(
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <div className={generalLevelsStyles.instructions}>
                The password appears in the picture from the website postimg
            </div>
            <img className={generalLevelsStyles.gif} src="https://i.pinimg.com/originals/87/76/b9/8776b926c6e1ad1cd29eaa8a6d7dc145.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint hints={level8Hints}/>
            </div>
            <SixRandomImagesAndPassword />
            {fetchImages && <OneRandomImage />}
        </div>
    );
}

const Level8 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level8;
