import { useEffect, useState } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from "../../../components/next_level_popup/nextLevel"

const CURRENT_LEVEL = 12;

const level12Hints: string[] = [
    `<img src="https://i.postimg.cc/zGPXwMDD/level-12-hint.png" width="100%" >`,
    `To add a new key:value pair, double-click the empty space in the local storage table`
];

const CurrentLevel = () : JSX.Element => {
    const [showPassword, setShowPassword] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            const showPassword = localStorage.getItem("showPassword");
            setShowPassword((showPassword === "true"));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <div className={generalLevelsStyles.instructions}>
                <p>{`In the local storage, set the name:value "showPassword":"true"`}</p>
            </div>
            <img className={generalLevelsStyles.gif} src="https://media1.tenor.com/images/2dbe238532c3e5d76c88a1a62b0b9d3f/tenor.gif?itemid=25324926"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint hints={level12Hints}/>
            </div>
            { (showPassword && localStorage.getItem("showPassword") === "true") && <span className={generalLevelsStyles.password}>The password is: {JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[CURRENT_LEVEL + 1]}</span>}
        </div>
    );
}

const Level12 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level12;