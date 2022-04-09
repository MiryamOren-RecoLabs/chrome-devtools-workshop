import { useEffect } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from "../../../components/next_level_popup/nextLevel"
import { setCookie, deleteCookie } from '../../../utils/handleCookies'

const CURRENT_LEVEL = 10;

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


const CurrentLevel = () : JSX.Element => {
    const cookies: string[] = [];
    const COOKIE_NAME = '8e36b924-1ea2-404d-8c7f-287a4ae9ce7c';
    useEffect(() => {
        for (let i = 0; i < 60; i++) {
            const name = generateUUID();
            const value = generateUUID()
            setCookie(name, value);
            cookies.push(name);
            if (i === 47) setCookie(COOKIE_NAME, JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[CURRENT_LEVEL + 1]);
        };
        return () => {
            deleteCookie(COOKIE_NAME);
            cookies.forEach((cookieName: string) => deleteCookie(cookieName));
        }
    }, []);

    return(
        <div className={generalLevelsStyles.levelScreen}>
            
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`}/>
            <div className={generalLevelsStyles.instructions}>
                <p>{`The password is stored in the cookie "${COOKIE_NAME}"`}</p>
            </div>
            <img className={generalLevelsStyles.gif} src="https://i.pinimg.com/originals/8e/40/39/8e4039a87321ee8c33097785f484f6b7.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint />
            </div>
        </div>
    );
}

const Level10 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level10;
