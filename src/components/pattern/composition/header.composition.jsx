import Simbol from "../../../assets/images/ignite.png"
import styles from '../../styles.module.css'

export default function Header(){
    return(
        <header className={styles.header}>
                <img className={styles.headerImage} src={Simbol} alt="" />           
        </header>
    )
}