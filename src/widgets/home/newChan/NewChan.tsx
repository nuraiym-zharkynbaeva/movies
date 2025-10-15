"use client"
import CustomButton from "@/shared/ui/button/CustomButton"
import styles from "./styles.module.css"
import { FC, useState } from "react"
import OneCard from "../oneCard/OneCard"

interface INewChan {
    isBtn: boolean,
    isView: boolean,
    imgs: string[],
    title: string
}

const NewChan: FC<INewChan> = ({ isBtn, isView, imgs, title }) => {



    return (
        <div className={styles.cont} >
            <div className={styles.new}>
                <div className={styles.new__right}>
                    <h3>{title}</h3>
                    {isView &&
                        <div className={styles.view}>
                            <a href=""><p>View all</p></a>
                            <img src="/arrow.png" alt="" />
                        </div>
                    }

                </div>
                {isBtn &&
                    <div className={styles.btn}>
                        <CustomButton />
                    </div>
                }

            </div>
            <div className={styles.newChan}>
                {imgs.map((el, i) => {
                    return (
                        <OneCard img={el} key={i} />
                    )
                })}
            </div>
        </div>
    )
}

export default NewChan
