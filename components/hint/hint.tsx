import styles from './hint.module.css'
import modalStyles from '../modal.module.css'
import Image from "next/image";
import BulbIcon from '../../images/light-bulb-icon.png'
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React, { useState, useEffect }  from 'react';

const customLoader = ({ src }: { src: string}) => {
    return src
}

interface HintProps {
    hints?: string[];
}
const Hint = ({ hints=[] }: HintProps): JSX.Element => {
    const [showHint, setShowHint] = useState(false);
    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    return (
        <div className={styles.hint}>
            <button className={styles.hintButton} onClick={() => setShowHint(true)}>
                <Image src={BulbIcon} height={25} width={25} loader={customLoader} unoptimized alt="bulb-icon"/>
                <span>Hint?</span>
            </button>
            <Modal className={`${modalStyles.modal} ${styles.hintModal}`} isOpen={showHint}>
                <button className={modalStyles.modalCloseButton } onClick={() => setShowHint(false)}>x</button>
                <h1>{hints.length === 1? 'Got stuck? Try this': 'Got stuck? Try these'}</h1>
                <div>
                    {hints.map(hint => <div key={hint}>
                        <span className={styles.hintLightBulb}>{`💡 `}</span>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{hint}</ReactMarkdown>
                    </div>)}
                </div>
            </Modal>
        </div>
    );
}

export default Hint;