import React from "react";
import styles from "./Contacts.module.css";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import { Container } from "@material-ui/core";

const Contacts: React.FC = () => {
  return (
    <section className={styles.contacts}>
      <Container className={styles.contactsContainer}>
        <Title title="Контакты" index="04" />
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="input" />
          <input className={styles.input} type="text" placeholder="input" />
          <textarea
            className={styles.textarea}
            placeholder="textarea"
          ></textarea>
        </form>
        <Button>Отправить</Button>
      </Container>
    </section>
  );
};

export default Contacts;
