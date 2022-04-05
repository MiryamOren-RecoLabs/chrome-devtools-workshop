import PasswordForm from './passwordForm';

interface LockScreenProps {
    level: number;
}

const LockScreen = ({ level }: LockScreenProps): JSX.Element => {
    return (
    <div>
        <PasswordForm level={level}/>
    </div>);
}

export default LockScreen;