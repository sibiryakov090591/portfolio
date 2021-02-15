import React from "react";
import styles from "./Contacts.module.css";
import commonStyles from "../../styles/commonStyles.module.css";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";

const Contacts: React.FC = () => {
    return (
        <section className={styles.contacts}>
            <div className={`${commonStyles.container} ${styles.contactsContainer}`}>
                <Title title="Контакты"/>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder="input"/>
                    <input className={styles.input} type="text" placeholder="input"/>
                    <textarea className={styles.textarea} placeholder="textarea"></textarea>
                </form>
                <Button>Отправить</Button>
            </div>
        </section>
    )
}

export default Contacts;