import React from "react";
import styles from "./Hero.module.css";
import commonStyles from "../../styles/commonStyles.module.css";
import my_photo from "../../img/my_photo.jpg";

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles.heroContainer} ${commonStyles.container}`}>
                <h1 className={styles.presentation}>
                    Привет, <br/>
                    меня зовут Андей Сибиряков, <br/>
                    я frontend разработчик.
                </h1>
                <img className={styles.photo}
                     src={my_photo}
                     alt="my photo"/>
            </div>
        </section>
    )
}

export default Hero;