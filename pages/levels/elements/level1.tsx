import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from '../../../components/hint/hint'
import NextLevel from '../../../components/next_level_popup/nextLevel'
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'

const CurrentLevel = (): JSX.Element => {
    return (
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage="Level 1" />
            <p className={generalLevelsStyles.instructions}>
                Find the hidden span in the page, and make it visible
            </p>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/DqdCitr-57MAAAAM/cheshire-cat-alice-in-wonderland.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={1} />
                <Hint />
            </div>
            <p className="password">
                <span style={{ visibility: 'hidden' }} className={generalLevelsStyles.password}>The password is: Iafortina</span>
            </p>
        </div>);
}

const Level1 = (): JSX.Element => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={1}/>
}

export default Level1;

