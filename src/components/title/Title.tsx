import React from "react";
import styles from "./Title.module.css";

type PropsType = {
    title: string
}

const Title: React.FC<PropsType> = (props) => {
    return (
        <h2 className={styles.title}>
            {props.title}
        </h2>
    )
}

export default Title;