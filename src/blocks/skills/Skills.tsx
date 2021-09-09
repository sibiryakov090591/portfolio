import React from "react";
import { useStyles } from "./styles";
import Skill from "../../components/skill/Skill";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import react_logo from "../../images/react_logo.png";
import typescript_logo from "../../images/typescript_logo.png";
import sass_logo from "../../images/sass.png";
import gsap_logo from "../../images/gsap.svg";
import api_logo from "../../images/api_rest.png";

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.skills}>
      <Container className={classes.skillsContainer}>
        <Title title="Мои скилы" index="01" />
        <div className={classes.skillsWrapper}>
          <Skill title={"React"} iconUrl={react_logo}>
            Описание моих навыков в React <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
            quisquam.
          </Skill>
          <Skill title={"TypeScript"} iconUrl={typescript_logo}>
            Описание моих навыков в TypeScript <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium asperiores, corporis debitis eaque ex illum iste itaque,
            libero mollitia nulla pariatur repudiandae veritatis, vitae
            voluptatibus.
          </Skill>
          <Skill title={"HTML"} iconUrl={sass_logo}>
            Описание моих навыков в HTML <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            eligendi eveniet laborum molestiae provident quidem!
          </Skill>
          <Skill title={"GSAP"} iconUrl={gsap_logo}>
            Описание моих навыков в HTML <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            eligendi eveniet laborum molestiae provident quidem!
          </Skill>
          <Skill title={"Rest API"} iconUrl={api_logo}>
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
