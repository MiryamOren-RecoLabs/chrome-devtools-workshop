import { useEffect } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"
import axios from 'axios'
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from "../../../components/next_level_popup/nextLevel"

const CurrentLevel = () : JSX.Element => {

    useEffect(() => {
        const getPassword = async () => {
            try {
                await axios.get("https://621de1f5849220b1fc8833a7.mockapi.io/api/v1/password/097af2ae-9967-11ec-b909-0242ac120002")
            } catch (error) {
                console.error(error)
            }
        };
        getPassword()
    }, []);

    return(
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage="Level 5" />
            <div className={generalLevelsStyles.instructions}>
                Check the network tab
            </div>
            <img className={generalLevelsStyles.gif} src="https://media1.giphy.com/media/l2JhJmZxibUVOMAPm/giphy.gif"/>
            <NextLevel currentLevel={5} />
            <Hint />
        </div>
    );
}

const Level5 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={5}/>
}

export default Level5;