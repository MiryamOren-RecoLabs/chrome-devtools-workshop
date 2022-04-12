import { useEffect } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from "../../../components/next_level_popup/nextLevel"

const CURRENT_LEVEL = 5;

const level5Hints: string[] = [
    `How to open the console tab? 
    <br /><span class="tab"></span>🐧 Linux: Ctrl + Shift + j 
    <br /><span class="tab"></span>🪟 Windows: Ctrl + Shift + j 
    <br /><span class="tab"></span>🍎 Mac: Option + ⌘ + J`,
    `Click on the error log to see its source`,
];

const CurrentLevel = () : JSX.Element => {
    return(
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <div className={generalLevelsStyles.instructions}>
                <p>{`What's the name of the function that logs the error?`}</p>
            </div>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/OxvVRFnPZO8AAAAC/error-the-simpsons.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint hints={level5Hints}/>
            </div>
            <iframe src="/level5.html" style={{display: "none"}}></iframe>
        </div>
    );
}

const Level5 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level5;
