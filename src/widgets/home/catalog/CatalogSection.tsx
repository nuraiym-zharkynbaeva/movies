import CustomButton from "@/shared/ui/button/CustomButton"
import styles from "./styles.module.css"
import NewChan from "../newChan/NewChan"

const CatalogSection = () => {
  const mockData = [{ isView: false, title: "Recommended Channels", isBtn: false, imgs: ["/first.png", "/second.png", "/third.png", "/fourth.png", "/five.png", "/six.png"] },
  { isView: true, isBtn: true, title: "New Channels", imgs: ["/seven.png", "/eight.png", "/second.png", "/nine.png", "/six.png", "/ten.png"] },
  { isView: true, isBtn: false, title: "New Movies", imgs: ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"] },
  { isView: true, isBtn: true, title: "Popular Movies", imgs: ["/6.png", "/5.png", "/4.png", "/3.png", "/2.png", "/1.png"] },
  { isView: true, isBtn: false, title: "Games", imgs: ["/g1.png", "/g2.png", "/g3.png", "/g4.png", "/g5.png", "/g6.png"] }]
  return (
    <div className={styles.catalog}>
      <div className={styles.container}>
        {mockData.map((el, i) => {
          return (
            <NewChan {...el} />
          )
        })}
      </div>
    </div>
  )
}

export default CatalogSection
