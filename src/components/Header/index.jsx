import styles from './Header.module.css';
import logoSvg from '../../assets/images/logo.svg';
import iconMoon from '../../assets/images/icon-moon.svg';


function Header(){
    return (
        <header className={styles.header}>
            <img src={logoSvg} alt="logo Extensions" className={styles.header_logo}/>
            <button className={styles.btn_dark}><img src={iconMoon} alt="logo Extensions" className={styles.button_image_dark}/></button>
        </header>
    )

}

export default Header;