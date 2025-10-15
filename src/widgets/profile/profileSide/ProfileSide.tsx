"use client"
import WatchNowButton from "@/shared/ui/secondButton/WatchNowButton"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import userAuthStore from "@/shared/api/userAuthStore"

const ProfileSide = () => {
  const { update, user } = userAuthStore()
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const onSubmit = async () => {
    try {
      await update({ email, phone: String(phone) })

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setEmail(user ? user.email : "")
    setPhone(user ? user.phone : "")
  }, [user])

  return (
    <div className={styles.profileSide}>
      <div className={styles.profile}>
        <img src="/userlarge.png" alt="" />
        <h2>Profile</h2>
      </div>

      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="enter Email address" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="enter Mobile Phone" />
      <div className={styles.btn}>
        <WatchNowButton onClick={onSubmit} label="Save Changes" size="large" />
      </div>
    </div>
  )
}

export default ProfileSide
