import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Countdown from './Components/countdown/contdown'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.center}>
          BLOCKGOR
        </div>
        <div className={styles.text}>
          We are building platform multiplayer
        </div>
        <div className={styles.countdown}>
          <Countdown />
        </div>
      </div>

    </main>
  )
}
