import React from "react";
import { useStyles } from "./styles";

type PropsType = {
  iconUrl: string;
  title: string;
};

const Skill: React.FC<PropsType> = ({ iconUrl, title, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <img className={classes.icon} src={iconUrl} alt="Project icon" />
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{children}</p>
    </div>
  );
};

export default Skill;
