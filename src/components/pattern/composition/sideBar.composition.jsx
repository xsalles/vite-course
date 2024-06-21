import styles from "../../styles.module.css"
import BackgroundSide from "../../../assets/images/background-sidebar.png"
import Profile from "../../../assets/images/Profile.png"

export default function SideBar(){
    return(
        <div className={styles.sidebarContainer}>
            <img  className={styles.backgroundSide} src={BackgroundSide} alt="" />
            <h1>Pedro Sales</h1>
            <p>Dev Front-End</p>
            <button className={styles.lineSide}></button>
            <button className={styles.buttonSide}>Edite seu perfil</button>
        </div>
    )
}