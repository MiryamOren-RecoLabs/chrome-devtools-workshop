import PasswordForm from './passwordForm';
import styles from './lockScreen.module.css'
import Navbar from '../navbar/navbar';

interface LockScreenProps {
    level: number;
    setDisplayLockScreen: any;
}

const LockScreen = ({ level, setDisplayLockScreen }: LockScreenProps): JSX.Element => {
    return (
    <div className={styles.lockScreen}>
        <Navbar currentPage={`Level ${level}`} />
        <div className={styles.lockScreenOverlay}>
            <PasswordForm level={level} description={`Enter the password for level ${level}`} setDisplayLockScreen={setDisplayLockScreen} />
        </div>
    </div>);
}

export default LockScreen;