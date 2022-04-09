import Success from '../../images/success-icon.png'
import Image from 'next/dist/client/image'
import styles from './nextlevel.module.css'
import { useEffect, useState } from 'react';
// @ts-ignore
import Modal from 'react-modal';
import PasswordForm from '../password_form/passwordForm';
const customLoader = ({ src }: { src: string}) => {
    return src
}

interface NextLevelProps {
    currentLevel: number;
}

const NextLevel = ({currentLevel}: NextLevelProps) => {
    const [showNextLevelPrompt, setShowNextLevelPrompt] = useState(false);
    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    return (
        <div className={styles.nextLevel}>
            <button className={styles.nextLevelButton} onClick={() => setShowNextLevelPrompt(true)}>
                <span className={styles.successIcon}>
                    <Image src={Success} height={23} width={23} loader={customLoader} unoptimized/>
                </span>
                <span>Cracked it!</span>
            </button>
            <Modal className={styles.nextLevelModal} isOpen={showNextLevelPrompt}>
                <button onClick={() => setShowNextLevelPrompt(false)} style={{fontFamily: "'Fredoka One', cursive", fontSize: "25px"}}>x</button>
                <PasswordForm level={currentLevel + 1} description="Enter the password you've found 🗝️" shouldMoveToNextLevel={true}/>
            </Modal>
        </div>
    )
}

export default NextLevel