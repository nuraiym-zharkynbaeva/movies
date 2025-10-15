'use client'
import { useState } from 'react'
import styles from "./styles.module.css"

const seasons = ['Season 1', 'Season 2', 'Season 3', 'Season 4']

const SeasonSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(seasons[0])

  const handleSelect = (season: string) => {
    setSelected(season)
    setIsOpen(false)
  }

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.selector}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.arrow}>▼</span>
        <span>{selected}</span>
        
      </div>

      {isOpen && (
        <ul className={styles.list}>
          {seasons.map((season) => (
            <li
              key={season}
              className={styles.item}
              onClick={() => handleSelect(season)}
            >
              {season}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SeasonSelect
