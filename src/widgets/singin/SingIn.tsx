"use client"
import WatchNowButton from '@/shared/ui/secondButton/WatchNowButton'
import styles from './styles.module.css'
import Link from 'next/link'
import { useState } from 'react'
import userAuthStore from '@/shared/api/userAuthStore'

const SingIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = userAuthStore()

  const onSubmit = async () => {
    try {
      await login({ email, password })
      window.location.href = "/" 
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.bg}>
      <div className={styles.img}>
        <img src="/logo.png" alt="" />
      </div>

      <div className={styles.singin}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password' />
        <div className={styles.btn}>
          <WatchNowButton onClick={onSubmit} label='Sign in' />
        </div>
        <Link href="/register">You don`t have an accaount? Register</Link>
      </div>
      <div className={styles.bottom}>
        <Link href="/">Back to website</Link>
      </div>

    </div>
  )
}

export default SingIn
