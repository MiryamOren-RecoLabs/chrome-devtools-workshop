import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from '../../../components/hint/hint'
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'


const CurrentLevel = (): JSX.Element => {
    return (
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage="Level 2" />
            <div className={generalLevelsStyles.instructions}>
                {`Change the class of this div to "showPassword"`}
            </div>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/23KqA5qlBnUAAAAC/class-laugh.gif"/>
            <Hint />
        </div>
    );
}

const Level2 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={2}/>
}

export default Level2;