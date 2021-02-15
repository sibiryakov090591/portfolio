import React from "react";
import styles from "./Button.module.css";

const Button: React.FC = (props) => {
    return (
        <button className={styles.btn}>
            {props.children}
        </button>
    )
}

export default Button;