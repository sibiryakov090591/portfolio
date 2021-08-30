import React from "react";
import styles from "./Footer.module.css";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <Title title="Сибиряков Андрей" />
        <div className={styles.elementsWrapper}>
          <div className={styles.element}></div>
          <div className={styles.element}></div>
          <div className={styles.element}></div>
          <div className={styles.element}></div>
        </div>
        <div>© 2019 Все права защищены</div>
      </Container>
    </footer>
  );
};

export default Footer;
