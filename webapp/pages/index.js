import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bgElements}>
        <div className={styles.bgElementMagenta}></div>
        <div className={styles.bgElementBlue}></div>
      </div>
      <h1>Word Bomb</h1>
      <div className={styles.button_div}>
        <Button text="Find a Game" size="medium" />
        <Button text="How to Play?" size="medium" />
      </div>
    </div>
  )
}
