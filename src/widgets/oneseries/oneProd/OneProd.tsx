'use client'
import { FC, useState } from "react"
import styles from "./styles.module.css"
import WatchNowButton from "@/shared/ui/secondButton/WatchNowButton"

interface IOneProd {
    img: string,
    title: string
}

const OneProd: FC<IOneProd> = ({ img, title }) => {

    const[hover,setHover]=useState(false)
    return (
        <div className={styles.seesonBlock}>
            <div className={styles.imgHover} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <img src={img} alt="" className={styles.s1} />
                {hover?<div className={styles.block}>
                    <div>
                        <h3>3. Meeting Jane</h3>
                        <p>| 34mins</p>
                    </div>
        <p>Cobb steals information from his targets by entering their dreams.
             Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</p>
       <div> <WatchNowButton size ='small'/></div>
        </div>:null}
                </div>
            
            <div className={styles.overlay}>
                <h3>{title}</h3>
            </div>

        </div>
    )
}

export default OneProd
