import React from "react";
import styles from "./HireMe.module.css";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import { Container } from "@material-ui/core";

const HireMe: React.FC = () => {
  return (
    <section className={styles.hire}>
      <Container className={styles.hireContainer}>
        <Title title="Рассматриваю варианты удаленной работы" />
        <Button>Нанять меня</Button>
      </Container>
    </section>
  );
};

export default HireMe;
