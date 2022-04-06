import PasswordForm from './passwordForm';
import styles from './lockScreen.module.css'

interface LockScreenProps {
    level: number;
    setDisplayLockScreen: any;
}

const LockScreen = ({ level, setDisplayLockScreen }: LockScreenProps): JSX.Element => {
    return (
    <div className={styles.lockScreen}>
        <div className={styles.lockScreenOverlay}>
            <PasswordForm level={level} setDisplayLockScreen={setDisplayLockScreen} />
        </div>
    </div>);
}

export default LockScreen;