'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from "./styles.module.css"


const movies = [
  { src: '/1.png' },
  { src: '/2.png' },
  { src: '/3.png' },
  { src: '/4.png' },
  { src: '/5.png' },
  { src: '/6.png' },
  { src: '/1.png' },
  { src: '/2.png' },
  { src: '/3.png' },
  { src: '/4.png' },
  { src: '/5.png' },
  { src: '/6.png' }
]

const InceptionBottom = () => {
  return (
    <div>
      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={'auto'}
          className={styles.swiper}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img
                src={movie.src}

              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default InceptionBottom
