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
                    "Develop highly interactive Front end / User Interfaces for your web and mobile applications"
                )}
            </div>
            <div className='skills-emoji'>
                {emoji("Progressive Web Applications ( PWA ) in normal and SPA Stacks")}
            </div>
            <div className='skills-emoji'>
                {emoji(
                    "Integration of third party services such as Firebase/ AWS / Digital Ocean"
                )}
            </div>
        </div>
    );
}