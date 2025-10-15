import { FC, useState } from "react"
import styles from "./styles.module.css"
import WatchNowButton from "@/shared/ui/secondButton/WatchNowButton"

interface IOneCard {
  img: string
}

const OneCard: FC<IOneCard> = ({ img }) => {

  const [hover, setHover] = useState(false)

  return (
    <div className={styles.imgHover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={img} alt="" />
      {hover ? <div className={styles.block}>
        <p>Enjoy the best of action packed movies from NBC international...</p>
        <div> <WatchNowButton size='small' /></div>
      </div> : null}
    </div>
  )
}

export default OneCard
