import styles from "../../styles.module.css"
import Ignite from "../../../assets/images/ignite.png"
import { useState } from "react"

export default function Footer(){

    const [email, setEmail] = useState('')

    const clearInput = () => {
        setEmail('')
    }

    return(
        <footer className={styles.footerContainer}>
            <img src={Ignite} alt=""/>
            <strong>Ignite Feed</strong>
            <div className={styles.footerEmail}>
                <h1>Newsletter</h1>
                <p>Seja o primeiro a receber as nossas novidades! Digite seu email abaixo para mais informações</p>
                <input  type="email" placeholder="Your Email"/>
                <button  type="submit" class="icon">&#9993;</button>
            </div>
        </footer>
    )
}