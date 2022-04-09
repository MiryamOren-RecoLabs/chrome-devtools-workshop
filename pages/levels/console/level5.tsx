import { useEffect } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from "../../../components/next_level_popup/nextLevel"

const CURRENT_LEVEL = 5;

const CurrentLevel = () : JSX.Element => {
    useEffect(() => {
        if (document) {
            let myScript = document.createElement("script");
            myScript.innerHTML = "let elreValnan = () => console.error('Error 103');elreValnan();";
            document.body.appendChild(myScript);
        } 
    }, []);

    return(
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <div className={generalLevelsStyles.instructions}>
                <p>{`What's the name of function that logging the error?`}</p>
            </div>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/OxvVRFnPZO8AAAAC/error-the-simpsons.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint />
            </div>
        </div>
    );
}

const Level5 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level5;
