import { useEffect } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"
import LevelWrapper from '../../../components/level_wrapper/levelWrapper'
import NextLevel from "../../../components/next_level_popup/nextLevel"

const CURRENT_LEVEL = 6;

const CurrentLevel = () : JSX.Element => {
    useEffect(() => {
        if (document) {
            let myScript = document.createElement("script");
            const password = JSON.parse(process.env.NEXT_PUBLIC_LEVELS_PASSWORDS!)[CURRENT_LEVEL + 1]
            myScript.innerHTML = `
            function generateRandom(min = 0, max = 100) {
                let difference = max - min;
                let rand = Math.random();
                rand = Math.floor( rand * difference);
                return rand + min;
            }
            function checkMyCode(func) {
                try {
                if (typeof func !== 'function') return 'Please pass a function as the parameter';
                let valid = true;
                let failure;

                for (let i = 0; i <= 30; i++) {
                    const a = generateRandom(1, 1000);
                    const b = generateRandom(1, 1000);
                    if (Math.pow(a, b) !== func(a,b)) {
                    failure = a + '^' + b + ' ≠ ' + func(a,b);
                    valid = false;
                    break;
                    }
                }
                return valid? 
                    'You did it! The password is: ${password}' :
                    'The function failed in the following case: '  + failure + '. Please try again';
                } catch (error) {
                    return 'An error happened while trying to check your code: ' + error; 
                }
            }`;
            document.body.appendChild(myScript);
        } 
    }, []);

    return(
        <div className={generalLevelsStyles.levelScreen}>
            
            <Navbar currentPage={`Level ${CURRENT_LEVEL}`} />
            <div className={generalLevelsStyles.instructions}>
                <p>{`Write a JS power function in the console, then call the function "checkMyCode" with your function as its only parameter`}</p>
                <p style={{fontSize: "20px"}}>* Power function is a function that gets two parameters, a and b and returns the value of a to the power of b (a^b)</p>
            </div>
            <img className={generalLevelsStyles.gif} src="https://media4.giphy.com/media/3o7qE1Thg4KxFpMGSk/200.gif"/>
            <div className={generalLevelsStyles.buttons}>
                <NextLevel currentLevel={CURRENT_LEVEL} />
                <Hint />
            </div>
        </div>
    );
}

const Level6 = () => {
    return <LevelWrapper currentLevelComponent={<CurrentLevel />} currentLevel={CURRENT_LEVEL}/>
}

export default Level6;
