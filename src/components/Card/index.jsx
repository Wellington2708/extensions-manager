import styles from './Card.module.css';
import logoDevLens from '../../assets/images/logo-devlens.svg';


function Card() {
    return (
        <div className={styles.description_card}>
            <div className={styles.header_content}>
                <div className={styles.logo_container}>
                    <img src={logoDevLens} alt="logo devlens" />
                </div>
                <div className={styles.elements_card}>
                    <h3>DevLens</h3>
                    <p>Quickly inspect page layouts and visualize element boundaries.</p>
                </div>
            </div>
            <div className={styles.container_btn}>
                <button className={styles.btn_card}>Remove</button>
                <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                </label>
            </div>
        </div>
    )
}

export default Card;