import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from '../../../components/hint/hint'
import NextLevel from '../../../components/next_level_popup/nextLevel'
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import { useEffect, useRef, useState } from 'react'
import { clearInterval } from 'timers'

const CURRENT_LEVEL = 2;

// https://stackoverflow.com/questions/59856547/determine-which-color-red-blue-green-or-other-would-be-visible-for-a-given-r
const isRedish = (rgbValue: string) =>{
    try {
        let colorsString;
        rgbValue.substring(0, 4) === "rgba" ? colorsString = rgbValue.slice(5,17): colorsString = rgbValue.slice(4,17);
        const colorsArray = colorsString.split(',').map(color => parseInt(color.trim()));
        const [ red, green, blue ] = colorsArray;

        if (red > 100 && red > green * 2 && red > blue * 2) {
            return true;
        } else return false;
    } catch (error) {
        return false;
    }
}

export const CurrentLevel = (): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false)
    const instructionsRef = useRef<null | HTMLParagraphElement>(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setShowPassword(isRedish(window.getComputedStyle( instructionsRef.current! ,null).getPropertyValue('color')));
        }, 1000)

        return () => clearInterval(interval);
    }, [instructionsRef])
    return (
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`}/>
            <p className={generalLevelsStyles.instructions} ref={instructionsRef}>
                Change the color of this text to red 
            </p>
            <img className={generalLevelsStyles.gif} src="https://64.media.tumblr.com/e79ccbb0925c7586bf849916e3c4d0b4/e41abebad83c3f27-1e/s540x810/b36041729a899516e06f489175c391a4cdc001b9.gifv" />
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint />
            </div>
            <p className="password">
                {showPassword && isRedish(window.getComputedStyle( instructionsRef.current! ,null).getPropertyValue('color')) && <span className={generalLevelsStyles.password}>The password is: {JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[CURRENT_LEVEL + 1]}</span>}
            </p>
        </div>);
}

const Level2 = (): JSX.Element => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level2;

