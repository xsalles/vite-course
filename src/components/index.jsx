import { useDebugValue } from "react";
import Header from "./pattern/composition/header.composition";
import SideBar from "./pattern/composition/sideBar.composition";
import Post from "./pattern/composition/post.composition";
import styles from "../components/styles.module.css"


export default function IgniteFeed(){
    return(
        <div>
            <Header/>
            <div className={styles.wrapper}>
            <SideBar/> 
            <Post/>
            </div>
            
        </div>
    )
}