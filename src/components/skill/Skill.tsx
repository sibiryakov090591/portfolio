import React from "react";
import styles from "./Skill.module.css";

type PropsType = {
    iconUrl: string
    title: string
}

const Skill: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.icon} src={props.iconUrl} alt="Skill icon"/>
            <h3 className={styles.title}>
                {props.title}
            </h3>
            <p className={styles.description}>
                {props.children}
            </p>
        </div>
    )
}

export default Skill;