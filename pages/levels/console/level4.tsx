import { useEffect } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from '../../../components/hint/hint'
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from "../../../components/next_level_popup/nextLevel"

const CURRENT_LEVEL = 4;

const level4Hints: string[] = [
    `How to open the console tab? 
    <br /><span class="tab"></span>🐧 Linux: Ctrl + Shift + j 
    <br /><span class="tab"></span>🪟 Windows: Ctrl + Shift + j 
    <br /><span class="tab"></span>🍎 Mac: Option + ⌘ + J`,
];

const CurrentLevel = () => {
    useEffect(() => {
        console.log(`The password is: ${JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[CURRENT_LEVEL + 1]}`)
    }, []);
    return(
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <div className={generalLevelsStyles.instructions}>
                Look at the console
            </div>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/xwnwTsNx02wAAAAC/amirlotan-roi-kafri.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint hints={level4Hints}/>
            </div>
        </div>
    );
}

const Level4 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level4