import React from "react";
import styles from "./Project.module.css";

type PropsType = {
    imgUrl: string
    title: string
}

const Project: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={props.imgUrl} alt="work image"/>
            <div className={styles.description}>
                <h3 className={styles.title}>
                    {props.title}
                </h3>
                <p className={styles.text}>
                    {props.children}
                </p>
            </div>
        </div>
    )
}

export default Project;