import Success from '../../images/success-icon.png'
import Image from 'next/dist/client/image'
import styles from './next-level.module.css'

const customLoader = ({ src }: { src: string}) => {
    return src
}

const NextLevel = () => {
    return (
        <button className={styles.nextLevelButton}>
            <span className={styles.successIcon}>
                <Image src={Success} height={23} width={23} loader={customLoader}/>
            </span>
            <span>Cracked it!</span>
        </button>
    )
}

export default NextLevel