import styles from './Header.module.css'

function Header(){
    return (
        <header className={styles.header}>
            <img src="src/assets/images/logo.svg" alt="logo Extensions" className={styles.header_logo}/>
            <button className={styles.btn_dark}><img src="src/assets/images/icon-moon.svg" alt="logo Extensions" className={styles.button_image_dark}/></button>
        </header>
    )

}

export default Header;