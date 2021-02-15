import React from "react";
import styles from "./Hero.module.css";
import stylesContainer from "../../styles/commonStyles.module.css";

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={`${stylesContainer.container} ${styles.heroContainer}`}>
                <h1 className={styles.presentation}>
                    Привет, <br/>
                    меня зовут Андей Сибиряков, <br/>
                    я frontend разработчик.
                </h1>
                <img className={styles.photo}
                     src="https://lh3.googleusercontent.com/proxy/74zXZsZvwiky0PGBu_8oTLxxC4qoBsr9WCkVGD_nggfUHL3-rPAf-o5rPWaJdahl96GIuQlv8tpHWTyQRIhwWZfJgDlfCPCOVyHGSSx4Cg"
                     alt="my photo"/>
            </div>
        </section>
    )
}

export default Hero;