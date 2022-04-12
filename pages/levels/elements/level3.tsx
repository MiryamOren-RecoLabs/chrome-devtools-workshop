import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from '../../../components/hint/hint'
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from '../../../components/next_level_popup/nextLevel'
import { useEffect, useRef, useState } from 'react'


const CURRENT_LEVEL = 3;

const level3Hints: string[] = [
    `<a href="https://blog.hubspot.com/website/what-is-css-class" target="_blank">What is CSS class?</a>`,
    `How to edit HTML elements attributes using Chrome devtools:
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/DbHxHvMFZ8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
];

const CurrentLevel = (): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false)
    const instructionsRef = useRef<null | HTMLParagraphElement>(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setShowPassword(instructionsRef.current?.getAttribute('class') === "showPassword");
        }, 1000)

        return () => clearInterval(interval);
    }, [instructionsRef])
    return (
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <div className={generalLevelsStyles.instructions} ref={instructionsRef}>
                Change the class of this div to <code>showPassword</code>
            </div>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/23KqA5qlBnUAAAAC/class-laugh.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint hints={level3Hints}/>
            </div>
            <p className="password">
                {showPassword && instructionsRef.current?.getAttribute('class') === "showPassword" && <span className={generalLevelsStyles.password}>The password is: {JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[CURRENT_LEVEL + 1]}</span>}
            </p>
        </div>
    );
}

const Level3 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level3;