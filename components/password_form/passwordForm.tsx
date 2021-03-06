import { useEffect, useRef, useState, MouseEvent, MouseEventHandler  } from "react";
import { getCookie, setCookie } from '../../utils/handleCookies'
import levelsConfig from '../../levelsConfig'
import styles from './passwordForm.module.css'

interface PasswordFormProps {
    level: number;
    description: string;
    setDisplayLockScreen?: any;
    // If shouldMoveToNextLevel is true, 
    // inputting the correct password will advance the player
    // to the next level. Otherwise (false or null), don't.
    shouldMoveToNextLevel?: boolean;
}

const PasswordForm = ({ level, description, setDisplayLockScreen, shouldMoveToNextLevel }: PasswordFormProps): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');
    const [wrongPassword, setWrongPassword] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, [inputRef]);

    const onChange = (e:  React.FormEvent<HTMLInputElement>) => {
        setWrongPassword(false)
        setInputValue(e.currentTarget.value);
    };
    const onSubmit = (e?:  React.FormEvent<HTMLFormElement> ) => {
        if (e) e.preventDefault();
        if (inputValue === JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[level]) {
            setInputValue('')
            const stringifiedPasswords = getCookie('levelsPasswords');
            const passwords = stringifiedPasswords? JSON.parse(stringifiedPasswords): {};
            setCookie('levelsPasswords', JSON.stringify({ ...passwords, [level]: inputValue }));
            if (setDisplayLockScreen) setDisplayLockScreen(false)
            setWrongPassword(false) // The password isn't false anymore
            if (shouldMoveToNextLevel) {
                const nextLevel = level;
                console.debug(`Moving to level ${nextLevel} out of ${levelsConfig.length}`);
                if (nextLevel === levelsConfig.length) {
                    window.location.href = '/win';
                    return;
                }
                const nextLevelConfig = levelsConfig[nextLevel]; // Off by one, arrays are zero-based
                const nextLevelURL = `/levels/${nextLevelConfig.tab.toLowerCase()}/level${nextLevelConfig.levelIndex}`;
                window.location.href = nextLevelURL;
            }
        } else {
            setWrongPassword(true)
        }
    };

    return (
        <form className={styles.passwordForm} onSubmit={onSubmit}>
                <label>{description}</label>
                <div className={styles.passwordFormInputWrapper}>
                    <input 
                        value={inputValue}
                        onChange={onChange}
                        ref={inputRef}
                        onBlur={(e) => e.target.focus()}
                        size={15}
                    />
                    {!inputValue.length && <span></span>}
                </div>
                {<p style={{visibility : wrongPassword? "visible": "hidden"}} className={styles.passwordFormErrorMessage}>Wrong password, please try again</p>}
                <button onClick={() => onSubmit} type="submit">Submit</button>
        </form>)
}
export default PasswordForm