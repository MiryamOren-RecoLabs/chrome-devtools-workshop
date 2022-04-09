import { useEffect } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"
import axios from 'axios'
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from "../../../components/next_level_popup/nextLevel"

const CURRENT_LEVEL = 9;

const CurrentLevel = () : JSX.Element => {

    useEffect(() => {
        const getPassword = async () => {
            try {
                await axios.get("https://run.mocky.io/v3/ef0966d6-c964-4dbe-aa18-5216895b3f79");
            } catch (error) {
                console.error(error)
            }
            try {
                await axios.get("https://run.mocky.io/v3/18c4034d-c9e7-4334-8a23-a3cb59ab985b");
            } catch (error) {
                console.error(error)
            }
        };
        getPassword()
    }, []);

    return(
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <div className={generalLevelsStyles.instructions}>
                Check the failed requests
            </div>
            <img className={generalLevelsStyles.gif} src="https://media4.giphy.com/media/1zlj55brLYCYmJqujn/giphy.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint />
            </div>
        </div>
    );
}

const Level9 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level9;