import styles from "./styles.module.css"

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.fadeInLeft}>About us</h1>
        <p className={`${styles.p} ${styles.fadeInUp1}`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. </p>

        <p className={styles.fadeInUp2}> Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.</p>
        <div className={`${styles.count} ${styles.fadeInUp3}`}>
          <div className={styles.movies}>
            <h2>10,000+</h2>
            <h4>Movies</h4>
          </div>
          <div className={styles.series}>
            <h2>5,000+</h2>
            <h4>Series</h4>
          </div>
        </div>
      </div>
      <img src="/splash.png" alt="" className={styles.splash} />
    </div>
  )
}

export default AboutUs
