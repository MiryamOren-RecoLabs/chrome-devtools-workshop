import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from '../../../components/hint/hint'
import NextLevel from '../../../components/next_level_popup/nextLevel'
import styles from './level0.module.css'

const CURRENT_LEVEL = 0;

export const Level0 = (): JSX.Element => {
    return (
        <div className={`${generalLevelsStyles.levelScreen} ${styles.level0}`}>
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <h1 className={generalLevelsStyles.instructions}>
                Hello and welcome to the first level of Chrome devtools workshop!
            </h1>
            <p>In each level you'll get instructions that will lead you to the password for the next level</p>
            <img className={generalLevelsStyles.gif} src="https://media1.giphy.com/media/l0G17mcoGBEabVgn6/200.gif"/>
            <p>In this level it's gonna be easy: the password for the next level is: <strong>{JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[CURRENT_LEVEL + 1]}</strong></p>
            <p>The passwords you found are stored for you in a cookie, so either don't delete this site cookies or save the passwords yourself, to avoid this situation </p>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/kUEHljqh640AAAAC/the-computer-forgot-my-password-password.gif"/>
            <p>Got stuck?</p>
            <img className={generalLevelsStyles.gif} src="http://38.media.tumblr.com/e258c82aed4791f3390a86bef055310f/tumblr_nk9m23oFjN1sj5pxco1_500.gif"/>
            <p>Just click this button</p>
            <div className={generalLevelsStyles.buttons}>
                <Hint />
            </div>
            <p>Found the password? Great! click here and go to the next level</p>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
            </div>
            <p>Good Luck!</p>
            <img className={generalLevelsStyles.gif} src="https://media1.giphy.com/media/GQT9tuAchaBG0/giphy.gif"/>
        </div>);
}

export default Level0;

