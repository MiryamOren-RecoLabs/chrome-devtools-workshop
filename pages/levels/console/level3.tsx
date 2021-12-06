import { useEffect } from "react"
import Navbar from '../../../components/navbar/navbar'
import generalLevelsStyles from '../level.module.css'
import Hint from '../../../components/hint/hint'

const Level3 = () => {
    useEffect(() => {
        console.log('The password is: "BlueDogbane"')
    }, []);
    return(
        <div className={generalLevelsStyles.levelScreen}>
            <Navbar currentPage="Level 3" />
            <div className={generalLevelsStyles.instructions}>
                Look at the console
            </div>
            <img className={generalLevelsStyles.gif} src="https://c.tenor.com/xwnwTsNx02wAAAAC/amirlotan-roi-kafri.gif"/>
            <Hint />
        </div>
    );
}

export default Level3