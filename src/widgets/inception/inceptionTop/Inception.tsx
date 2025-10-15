'use client'

import { useState } from 'react';
import WatchNowButton from "@/shared/ui/secondButton/WatchNowButton"
import styles from "./styles.module.css"
import InceptionBottom from "../inceptionBottom/InceptionBottom"


const Inception = () => {

  const [showTrailer, setShowTrailer] = useState(false);


  const trailerId = "YoHD9XEInc0";
  return (
    <div className={styles.inception}>
      <div className={styles.container}>
        <h1 className={styles.fadeInLeft1}>Inception</h1>
        <p className={styles.fadeInLeft2}>Sci-Fi Thriller 2010 | Channel 34</p>
        <h4 className={styles.fadeInLeft3}>Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.</h4>
        <div className={styles.fadeInButton}>
          <WatchNowButton
            onClick={() => setShowTrailer(true)}

          />
        </div>
        {showTrailer && (
          <div className={styles.trailerModal} onClick={() => setShowTrailer(false)}>
            <div className={styles.trailerContent}>
              <iframe
                src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1`}
                title="Трейлер Inception"
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
        <InceptionBottom />
      </div>
      <img src="/incepbg.png" alt="" className={styles.incepbg} />
    </div>
  )
}

export default Inception
