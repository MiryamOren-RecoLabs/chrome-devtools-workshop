import { useEffect, useState } from 'react';
import { passwordMatch } from '../../utils/levelsUtils';
import LockScreen from '../../components/password_form/lockScreen';

interface LevelWrapperProps {
    currentLevelComponent: JSX.Element;
    currentLevel: number;
}

const LevelWrapper = ({ currentLevelComponent, currentLevel }: LevelWrapperProps): JSX.Element => {
    const [displayLockScreen, setDisplayLockScreen] = useState<boolean | undefined>(true);

    useEffect(() => {
        setDisplayLockScreen(!passwordMatch(currentLevel));
    }, []);
    
    return <div> 
        {(!displayLockScreen && passwordMatch(currentLevel))? 
            currentLevelComponent :
            <LockScreen level={currentLevel} setDisplayLockScreen={setDisplayLockScreen}/>}
        </div>
}

export default LevelWrapper;