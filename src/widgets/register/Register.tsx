"use client"
import WatchNowButton from '@/shared/ui/secondButton/WatchNowButton'
import styles from './styles.module.css'
import Link from 'next/link'
import userAuthStore from '@/shared/api/userAuthStore'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Register = () => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { register } = userAuthStore()

  const onSubmit = async () => {
    try {
      await register({ name, phone: number, email, password })
      window.location.href = "/" // так делать нельзя, но выхода не было
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
        <h3>Register to get started</h3>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' />
        <input value={number} onChange={(e) => setNumber(e.target.value)} type="text" placeholder='phone number' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password' />
        <input type="text" placeholder='Confirm password' />
        <div className={styles.checkbox}>
          <input type="checkbox" />
          <p>By Signing up, you agree to the Terms of Use & Privacy Policy.</p>
        </div>

        <div className={styles.btn}>
          <WatchNowButton onClick={onSubmit} label='Register' />
        </div>
        <Link href="/login">You already have an accaount? Login</Link>
      </div>
      <div className={styles.bottom}>
        <a href="/">Back to website</a>
      </div>

    </div>
  )
}

export default Register
