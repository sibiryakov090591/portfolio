import React from "react";
import styles from "./HireMe.module.css";
import commonStyles from "../../styles/commonStyles.module.css";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";

const HireMe: React.FC = () => {
    return (
        <section className={styles.hire}>
            <div className={`${commonStyles.container} ${styles.hireContainer}`}>
                <Title title="Рассматриваю варианты удаленной работы"/>
                <Button>
                    Нанять меня
                </Button>
            </div>
        </section>
    )
}

export default HireMe;