import WatchNowButton from "@/shared/ui/secondButton/WatchNowButton"
import styles from "./styles.module.css"

const PlansSide = () => {
  return (
    <div>
      <div className={styles.plans}>
        <img src="/listlarge.png" alt="" />
        <h2>Plans</h2>
      </div>

      <div className={styles.onair}>
        <div className={styles.div}>
          <h4>OnAir Freemium</h4>
          <h5>N3,500</h5>
        </div>
        <div className={styles.div}>
          <h4>OnAir Premium</h4>
          <h5>N6,500</h5>
        </div>
        <div className={styles.div}>
          <h4>OnAir Premium 2</h4>
          <h5>N8,500</h5>
        </div>

        <div className={styles.btn}>
          <WatchNowButton label="Renew" />
          <p>Total:</p>
          <h5>N18,500</h5>
        </div>

      </div>


      <div className={styles.block}>
        <h4>Upgrade your service</h4>
        <div className={styles.blockpay}>
          <div className={styles.left}>
            <div className={styles.left__top}>

              <div>
                <h5>OnAir Freemium</h5>
              </div>
              <div><h5>OnAir Freemium 1</h5></div>
              <div><h5>OnAir Freemium 2</h5></div>
              <div><h5>OnAir Freemium 3</h5></div>
            </div>

            <div className={styles.left__center}>
            <div>
              <img src="/onair.png" alt="" />
              <h5>Watch 50 live TV channels</h5>
              <p>Stream live TV Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>
          </div>


          <div className={styles.left__bottom}>
            <div className={styles.icons}>
              <img src="/icons.png" alt="" />
            </div>

            <div className={styles.pay}>
              <h2>3,500</h2>
              <div>
                <WatchNowButton label="Add to Cart" />
              </div>



            </div>
          </div>

          </div>

          

          <div className={styles.right}>
<div className={styles.right__top}>
<h3>Your service</h3>
<h4>Your cart is empty</h4>
</div>
<div className={styles.right__bottom}>
<div>
  <h3>Total:</h3>
  <h2>N0.0c</h2>
</div>
<h3>Payment with</h3>
<img src="pay.png" alt="" />
<img src="pay.png" alt="" />
</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PlansSide
