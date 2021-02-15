import React from "react";
import styles from "./Footer.module.css";
import commonStyles from "../../styles/commonStyles.module.css";
import Title from "../../components/title/Title";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${commonStyles.container} ${styles.footerContainer}`}>
                <Title title="Сибиряков Андрей"/>
                <div className={styles.elementsWrapper}>
                    <div className={styles.element}></div>
                    <div className={styles.element}></div>
                    <div className={styles.element}></div>
                    <div className={styles.element}></div>
                </div>
                <div>
                    © 2019 Все права защищены
                </div>
            </div>
        </footer>
    )
}

export default Footer;