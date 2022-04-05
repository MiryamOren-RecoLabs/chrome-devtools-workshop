import { useState } from "react";
import { getCookie, setCookie } from '../../utils/handleCookies' 

interface PasswordFormProps {
    level: number;
}

const PasswordForm = ({ level }: PasswordFormProps): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');
    const [wrongPassword, setWrongPassword] = useState<boolean>(false)
    const onChange = (e:  React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    };
    const onSubmit = () => {
        if (inputValue === JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[level]) {
            setInputValue('')
            const stringifiedPasswords = getCookie('levelsPasswords');
            const passwords = stringifiedPasswords? JSON.parse(stringifiedPasswords): {};
            setCookie('levelsPasswords', JSON.stringify({ ...passwords, [level]: inputValue }));
        } else {
            setWrongPassword(true)
        }
    };

    return (
        <div style={{color: "black"}}>
            <label style={{color: "orange"}}>Enter the password of level {level}:</label>
            <input
                style={{color: "black"}}
                value={inputValue}
                onChange={onChange}
            />
            {wrongPassword && <p>Wrong password, please try again</p>}
            <button onClick={onSubmit} type="submit" style={{color: "black"}}>Submit</button>
        </div>)
}
export default PasswordForm