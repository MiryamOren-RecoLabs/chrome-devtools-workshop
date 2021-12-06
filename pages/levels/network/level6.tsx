import { useEffect, useState } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"
import axios from 'axios'

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
        <img alt="password" src="https://i.postimg.cc/76hpZKk1/download-1.jpg"/>
        <OneRandomImage />
        <OneRandomImage />
        <OneRandomImage />
    </div>
);

const Level6 = (): JSX.Element => {
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
            <Navbar currentPage="Level 6" />
            <div className={generalLevelsStyles.instructions}>
                The password appears in the picture from the website postimg
            </div>
            <img className={generalLevelsStyles.gif} src="https://i.pinimg.com/originals/87/76/b9/8776b926c6e1ad1cd29eaa8a6d7dc145.gif"/>
            <Hint />
            <SixRandomImagesAndPassword />
            {fetchImages && <OneRandomImage />}
        </div>
    );
}

export default Level6;
