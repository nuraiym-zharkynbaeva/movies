import styles from "./styles.module.css"



const ExampleSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1>
            Dive into a <strong>universe</strong> of
            un-ending content and channels
          </h1>
          <button className={styles.cta}>Start FREE trial</button>
        </div>


      </div>
    </div>
  )
}

export default ExampleSection
