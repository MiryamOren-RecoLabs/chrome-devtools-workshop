import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from '../../../components/hint/hint'
import NextLevel from '../../../components/next_level_popup/nextLevel'
import LockScreen from '../../../components/password_form/lockScreen'
import { useEffect, useState } from 'react'
import { getCookie } from '../../../utils/handleCookies' 

const Level1 = (): JSX.Element => {
    const passwordMatch = (level: number): boolean => {
        const stringifiedPasswords = getCookie('levelsPasswords');
        const passwords = stringifiedPasswords? JSON.parse(stringifiedPasswords): {};
        console.log(passwords[level], JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[level])
        return (passwords[level] && passwords[level] === JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[level]);
    };
    const [lockScreen, setLockScreen] = useState(true);
    useEffect(() => {
        setLockScreen(!passwordMatch(1));
    }, [passwordMatch(1)]);

    return (!lockScreen) ? (
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage="Level 1" />
            <p className={generalLevelsStyles.instructions}>
                Find the hidden span in the page, and make it visible
            </p>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/DqdCitr-57MAAAAM/cheshire-cat-alice-in-wonderland.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel />
                <Hint />
            </div>
            <p className="password">
                <span style={{ visibility: 'hidden' }} className={generalLevelsStyles.password}>The password is: Iafortina</span>
            </p>
        </div>) : <LockScreen level={1}/>;
}
export default Level1

