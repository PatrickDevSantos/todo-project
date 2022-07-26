import logo from '../assets/logo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className='wrapper'>
        <img src={logo} alt="logo" />
      </div>
    </header>
  )
}