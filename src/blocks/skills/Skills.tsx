import React from "react";
import styles from "./Skills.module.css";
import commonStyles from "../../styles/commonStyles.module.css";
import Skill from "../../components/skill/Skill";

const Skills: React.FC = () => {
    return (
        <section className={styles.skills}>
            <div className={`${commonStyles.container} ${styles.skillsContainer}`}>
                <h2 className={commonStyles.title}>Мои скилы</h2>
                <div className={styles.skillsWrapper}>
                    <Skill title={"React"} iconUrl="#">
                        Описание моих навыков в React <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quisquam.
                    </Skill>
                    <Skill title={"TypeScript"} iconUrl="#">
                        Описание моих навыков в TypeScript <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, corporis
                        debitis eaque ex illum iste itaque, libero mollitia nulla pariatur repudiandae veritatis, vitae
                        voluptatibus.
                    </Skill>
                    <Skill title={"HTML"} iconUrl="#">
                        Описание моих навыков в HTML <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eligendi eveniet laborum
                        molestiae provident quidem!
                    </Skill>
                </div>
            </div>
        </section>
    )
}

export default Skills;