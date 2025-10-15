'use client'
import userAuthStore from "@/shared/api/userAuthStore"
import PaymentsSide from "../paymentsSide/PaymentsSide"
import PlansSide from "../plansSide/PlansSide"
import ProfileSide from "../profileSide/ProfileSide"
import styles from "./styles.module.css"
import { useState } from 'react'

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'plans' | 'payments'>('profile')
  const { user } = userAuthStore()
  const renderTab = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSide />
      case 'plans':
        return <PlansSide />
      case 'payments':
        return <PaymentsSide />
      default:
        return null
    }
  }

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.left__side}>
          <div className={styles.top}>
            <img src="/profile.png" alt="" />
            <p>{user && user.name ? user.name : ""}</p>
            <p>{user && user.email ? user.email : ""}</p>
            <button></button>
            <p>Your subscriptions are valid until</p>
            <h4>25.12.2022</h4>


            <div className={styles.menuItem} onClick={() => setActiveTab('profile')}>
              <img src="/user.png" alt="" />
              <h3 className={activeTab === 'profile' ? styles.active : ''}>Profile</h3>
            </div>

            <div className={styles.menuItem} onClick={() => setActiveTab('plans')}>
              <img src="/list.png" alt="" />
              <h3 className={activeTab === 'plans' ? styles.active : ''}>Plans</h3>
            </div>

            <div className={styles.menuItem} onClick={() => setActiveTab('payments')}>
              <img src="/newspaper.png" alt="" />
              <h3 className={activeTab === 'payments' ? styles.active : ''}>Payments</h3>
            </div>
          </div>
          <div className={styles.bottom}>
            <img src="/arrows.png
        " alt="" />
            <a href="/" onClick={() => localStorage.clear()}>Log out</a>
          </div>
        </div>



        <div className={styles.right__side}>
          {renderTab()}
        </div>


      </div>
    </div>
  )
}

export default Sidebar
