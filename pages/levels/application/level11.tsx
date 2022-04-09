import { useEffect, useState } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from "../../../components/next_level_popup/nextLevel"
import { getCookie, setCookie, deleteCookie } from '../../../utils/handleCookies'

const CURRENT_LEVEL = 11;

const CurrentLevel = () : JSX.Element => {
    const [showPassword, setShowPassword] = useState(false)
    useEffect(() => {
        setCookie('Delete Me', 'delete this cookie');
        const interval = setInterval(() => {
            const deleteMeCookie = getCookie("Delete Me");
            setShowPassword(!deleteMeCookie);
        }, 1000);

        return () => {
            clearInterval(interval);
            deleteCookie('Delete Me');
        }
    }, []);

    return(
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <div className={generalLevelsStyles.instructions}>
                <p>{`Delete the cookie "Delete Me"`}</p>
                <p style={{fontSize: "20px"}}>{`*Note that the passwords you found are stored in a cookie, so don't delete all the cookies`}</p>
            </div>
            <img className={generalLevelsStyles.gif} src="https://66.media.tumblr.com/1ea51a4d775ec6028dde03a32a007d31/tumblr_p2yzauQ8lq1qgf1i8o1_500.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint />
            </div>
            { (showPassword && !getCookie("Delete Me")) && <span className={generalLevelsStyles.password}>The password is: {JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[CURRENT_LEVEL + 1]}</span> }
        </div>
    );
}

const Level11 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level11;