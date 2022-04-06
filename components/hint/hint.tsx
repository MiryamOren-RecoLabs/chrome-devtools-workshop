import styles from './hint.module.css'
import Image from "next/image";
import BulbIcon from '../../images/light-bulb-icon.png'
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect } from 'react';

const customLoader = ({ src }: { src: string}) => {
    return src
}

const defaultHints: string[] = [
    "💡 you can read about it here: [this is a link](https://duckduckgo.com)",
    "💡 normal text"
];

interface HintProps {
    hints?: string[]
}
const Hint = ({ hints=defaultHints }: HintProps): JSX.Element => {
    const [showHint, setShowHint] = useState(false);
    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    return (
        <div className={styles.hint}>
            <button className={styles.hintButton} onClick={() => setShowHint(true)}>
                <Image src={BulbIcon} height={25} width={25} loader={customLoader}/>
                <span>Hint?</span>
            </button>
            <Modal className={styles.hintModal} isOpen={showHint}>
                <button onClick={() => setShowHint(false)}>X</button>
                <h1>Got stuck? Try these</h1>
                {hints.map(hint => <div key={hint}>
                    {/* <Image src={BulbIcon} height={25} width={25}/> */}
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{hint}</ReactMarkdown>
                </div>)}
            </Modal>
        </div>
    );
}

export default Hint;