import styles from "./styles.module.css"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>


        <div className={styles.footer__left}>
          <img src="/onair-logo.png" alt="" />
          <p className={styles.p}>Hot Africa, we offer original, exclusive and premium stories. Everything you want to watch, anytime, anywhere and as much.</p>
          <div className={styles.stores}>
            <img src="/appstore.png" alt="App Store" />
            <img src="/googleplay.png" alt="Google Play" />
          </div>
          <div className={styles.socials}>
            <img src="/facebook.png" alt="" />
            <img src="/instagramm.png" alt="" />
            <img src="/twitter.png" alt="" />
            <img src="/youtube.png" alt="" />
            </div>
            <div className={styles.bottom}>
              <div className={styles.top}>
        <p>Terms of use</p>
        <p>Privacy Policy</p>
        <p>SiteMap</p>
        </div>
        <p>© 2022 Hot Africa. All rights reserved.</p>
      </div>
      </div>
         
       <div className={styles.footer__right}>

        <div className={styles.left}>
          <div className={styles.user}>
          <img src="user.png" alt="" />
          <h4>Sign in</h4>
          </div>
          <p>Personal data</p>
          <p>Choosing a Plan</p>
          <p>Payment</p>
        </div>

        <div className={styles.center}>
          <h4>Movies</h4>
          <p>Lock Upp</p>
          <p>Pavitra Rishta</p>
          <p>Girgit</p>
          <p>Hai Taubba Season 3</p>
          <p>Cartel</p>
          <p>Crimes And Confessions</p>
        </div>

        <div className={styles.right}>
          <h4>Series</h4>
          <p>X.X.X. Season 2</p>
          <p>Gandii Baat Season 5</p>
          <p>Gandii Baat Season 6</p>
          <p>Broken But Beautiful Season 1</p>
          <p>Class Of 2020</p>
        </div>
      </div>
      </div>
      
      </div>
   
  )
}

export default Footer
