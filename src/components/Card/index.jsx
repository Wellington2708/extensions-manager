import styles from './Card.module.css';

function Card({card}) {
    return (
        <div className={styles.description_card}>
            <div className={styles.header_content}>
                <div className={styles.logo_container}>
                    <img src={card.logo} alt="logo devlens" />
                </div>
                <div className={styles.elements_card}>
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
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