import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from '../../../components/hint/hint'
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from '../../../components/next_level_popup/nextLevel'

const CURRENT_LEVEL = 3;

const level3Hints: string[] = [
    `<a href="https://blog.hubspot.com/website/what-is-css-class" target="_blank">What is CSS class?</a>`,
    `How to edit HTML elements attributes using Chrome devtools:
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/DbHxHvMFZ8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
];

const CurrentLevel = (): JSX.Element => {
    return (
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <div className={generalLevelsStyles.instructions}>
                Change the class of this div to <code>showPassword</code>
            </div>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/23KqA5qlBnUAAAAC/class-laugh.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint hints={level3Hints}/>
            </div>
        </div>
    );
}

const Level3 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level3;