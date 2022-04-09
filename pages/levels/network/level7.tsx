import { useEffect } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"
import axios from 'axios'
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from "../../../components/next_level_popup/nextLevel"

const CURRENT_LEVEL = 7;

const CurrentLevel = () : JSX.Element => {

    useEffect(() => {
        const getPassword = async () => {
            try {
                await axios.get("https://run.mocky.io/v3/c9ba0fdf-2fb3-45e7-8138-22b58f0a3ba9")
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
                In the network tab, look for an HTTP response
            </div>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/QkQKzbUO4NcAAAAC/mean-girls-gretchen.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint />
            </div>
        </div>
    );
}

const Level7 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level7;