import React from "react";
import styles from "./Skills.module.css";
import Skill from "../../components/skill/Skill";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <Container className={styles.skillsContainer}>
        <Title title="Мои скилы" />
        <div className={styles.skillsWrapper}>
          <Skill title={"React"} iconUrl="#">
            Описание моих навыков в React <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
            quisquam.
          </Skill>
          <Skill title={"TypeScript"} iconUrl="#">
            Описание моих навыков в TypeScript <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium asperiores, corporis debitis eaque ex illum iste itaque,
            libero mollitia nulla pariatur repudiandae veritatis, vitae
            voluptatibus.
          </Skill>
          <Skill title={"HTML"} iconUrl="#">
            Описание моих навыков в HTML <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            eligendi eveniet laborum molestiae provident quidem!
          </Skill>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
