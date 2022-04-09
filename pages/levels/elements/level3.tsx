import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from '../../../components/hint/hint'
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from '../../../components/next_level_popup/nextLevel'

const CURRENT_LEVEL = 3;

const CurrentLevel = (): JSX.Element => {
    return (
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <div className={generalLevelsStyles.instructions}>
                {`Change the class of this div to "showPassword"`}
            </div>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/23KqA5qlBnUAAAAC/class-laugh.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint />
            </div>
        </div>
    );
}

const Level3 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level3;