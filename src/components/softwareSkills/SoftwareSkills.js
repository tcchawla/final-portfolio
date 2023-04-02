import React from 'react';
import "./SoftwareSkills.scss";
import { skillsSection } from "../../portfolio";
import { styles } from '../../styles';
import emoji from "react-easy-emoji";

export default function SoftwareSkill() {
    return (
        <div>
            <div className={styles.sectionSubText} style={{ "padding-left": 0, "list-style": "none", "font-size": "20px", "margin-bottom": "0px", "margin-top": "0px", "text-align": "center" }}>What Skills I have as a</div>
            <div className={styles.sectionHeadText} style={{ "padding-left": 0, "list-style": "none", "font-size": "3.5rem", "margin-bottom": "20px", "margin-top": "0px", "text-align": "center" }}>Software Developer</div>
            <div className='software-skills-main-div'>
                <ul className='dev-icons'>
                    {skillsSection.softwareSkills.map((softwareSkills, i) => {
                        return (
                            <li
                                key={i}
                                className="software-skill-inline"
                                name={softwareSkills.skillName}
                            >
                                <i className={softwareSkills.fontAwesomeClassname}></i>
                                <p>{softwareSkills.skillName}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='skills-emoji'>
                {emoji(
                    "Proficient in Python and Java with experience in developing Complex Web Services using Java and large ML models using PyTorch and Keras for predictive analytics."
                )}
            </div>
            <div className='skills-emoji'>
                {emoji("Experienced in developing and deploying applications on AWS using Docker, Kubernetes, and Jenkins for continuous integration and deployment.")}
            </div>
            <div className='skills-emoji'>
                {emoji(
                    "Experienced in database management with expertise in SQL and NoSQL databases like PostgreSQL, MongoDB, and DynamoDB."
                )}
            </div>
        </div>
    );
}