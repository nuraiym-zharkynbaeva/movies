'use client'

import { useState } from 'react';
import WatchNowButton from "@/shared/ui/secondButton/WatchNowButton"
import styles from "./styles.module.css"
import OneProd from "../oneProd/OneProd"
import SeasonSelect from '@/shared/ui/seasonselect/SeasonSelect';

const FriendsSection = () => {

  const [showTrailer, setShowTrailer] = useState(false);
  
  
  const trailerId = "8wThS5WCzs4";



  const mockData = [{ img: "/s1.png", title: "Season 1 | Ep. 1" }, { img: "/s2.png", title: "Season 1 | Ep. 2" },
  { img: "/s3.png", title: "Season 1 | Ep. 3" }, { img: "/s4.png", title: "Season 1 | Ep. 4" },
  { img: "/s1.png", title: "Season 1 | Ep. 5" }, { img: "/s2.png", title: "Season 1 | Ep. 6" },
  { img: "/s3.png", title: "Season 1 | Ep. 7" }, { img: "/s4.png", title: "Season 1 | Ep. 8" }]

  return (
    <div className={styles.fbg}>
      <div className={styles.container}>
        <div className={styles.friends__left}>
          <h1 className={styles.fadeInLeft1}>Friends</h1>
          <p className={styles.fadeInLeft2}>4 Seasons | 12 Episodes</p>
          <h2 className={styles.fadeInLeft3}>Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</h2>
            
          <div className={styles.fadeInButton}>
            <WatchNowButton 
          onClick={() => setShowTrailer(true)}/>
          </div>

{showTrailer && (
          <div className={styles.trailerModal} onClick={() => setShowTrailer(false)}>
            <div className={styles.trailerContent}>
              <iframe
                src={`https://www.youtube.com/embed/${trailerId}??autoplay=1`}
                title="Friends Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button 
                className={styles.closeButton}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTrailer(false);
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
<div className={styles.selector}>


<h3>Select</h3>
<SeasonSelect />
</div>
          
         


        </div>
        <div className={styles.prodCont}>
            {mockData.map((el, i) => {
              return(
                <OneProd title={el.title} img={el.img} key={i}/>
              )
            })}
        </div>
      </div>

      <div className={styles.friend__right}>
        <img src="/fr.png" alt="" />
      </div>
    </div>
  )
}

export default FriendsSection
