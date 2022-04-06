import { getCookie } from './handleCookies' 

export const passwordMatch = (level: number): boolean => {
    const stringifiedPasswords = getCookie('levelsPasswords');
    const passwords = stringifiedPasswords? JSON.parse(stringifiedPasswords): {};
    return (passwords[level] && passwords[level] === JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[level]);
};