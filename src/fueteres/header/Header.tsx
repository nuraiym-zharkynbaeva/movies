"use client"

import Selector from "@/shared/ui/selector/Selector"
import styles from "./styles.module.css"
import Link from 'next/link'
import userAuthStore from "@/shared/api/userAuthStore"
import { useEffect } from "react"




const Header = () => {
  const { user, getProfile } = userAuthStore()
  useEffect(() => {
    getProfile()
  }, [])
  const dropdwn = [
    "Classical",
    "Education",
    "Entertainment",
    "Free-to-Air (Trial)",
    "Fun",
    "Gospel",
    "Indian",
    "Jazz",
    "Kids",
    "Live cams",
    "Movies",
    "Music",
    "News",
    "R&B",
    "Religion",
    "Rock",
    "Science",
  ]
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__left}>
          <Link href='/'><img src="/logo.png" alt="" /></Link>

          <nav>
            <ul className={styles.navList}>

              <li><Link href="/inception">Movies</Link></li>


              <li><Link href="/example">Series</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <Selector

                label="Music"
                items={dropdwn}
              />

            </ul>
          </nav>
        </div>


        <div className={styles.header__right}>
          <div className={styles.actions}>
            <Link href="" className={styles.iconLink}>
              <div className={styles.search}>
                <img src="/search.png" alt="" />
                <input type="text" placeholder="Search" />
              </div>

            </Link>
            {user ?
              <Link href="/profile" className={styles.iconLink}>
                <img src="/user.png" alt="" />
                <span>Profile</span>
              </Link>
              :
              <Link href="/login" className={styles.iconLink}>
                <span>Login</span>
              </Link>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
