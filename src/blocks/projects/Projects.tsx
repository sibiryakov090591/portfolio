import React from "react";
import styles from "./Projects.module.css";
import commonStyles from "../../styles/commonStyles.module.css";
import Title from "../../components/title/Title";
import Project from "../../components/project/Project";

const Projects: React.FC = () => {
    return (
        <section className={styles.projects}>
            <div className={`${commonStyles.container} ${styles.projectsContainer}`}>
                <Title title="Мои работы"/>
                <div className={styles.projectsWrapper}>
                    <Project imgUrl={"#"} title="Моя работа 1">
                        Описание работы 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ex molestiae,
                        mollitia obcaecati quisquam repellendus!
                    </Project>
                    <Project imgUrl={"#"} title="Моя работа 2">
                        Описание работы 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ex molestiae,
                        mollitia obcaecati quisquam repellendus!
                    </Project>
                </div>
            </div>
        </section>
    )
}

export default Projects;