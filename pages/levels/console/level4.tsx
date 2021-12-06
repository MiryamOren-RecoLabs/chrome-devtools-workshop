import { useEffect } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from "../../../components/hint/hint"

const Level4 = () : JSX.Element => {
    const Eagosse = () => console.error('Error 103');

    useEffect(() => {
        Eagosse();
    }, []);

    return(
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage="Level 4" />
            <div className={generalLevelsStyles.instructions}>
                <p>{`What's the name of function that logging the error?`}</p>
            </div>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/OxvVRFnPZO8AAAAC/error-the-simpsons.gif"/>
            <Hint />
        </div>
    );
}

export default Level4;
