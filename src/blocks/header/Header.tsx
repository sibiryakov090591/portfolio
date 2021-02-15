import React from "react";
import styles from "./Header.module.css";
import commonStyles from "../../styles/commonStyles.module.css";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} ${commonStyles.container}`}>
                <nav className={styles.menu}>
                    <ul className={styles.menuList}>
                        <li className={styles.menuItem}><a href="#">Главная</a></li>
                        <li className={styles.menuItem}><a href="#">Скиллы</a></li>
                        <li className={styles.menuItem}><a href="#">Проекты</a></li>
                        <li className={styles.menuItem}><a href="#">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;