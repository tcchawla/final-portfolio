import React from 'react';
import "./SoftwareSkills.scss";
import { skillsSection } from "../../portfolio";
import emoji from "react-easy-emoji";

export default function SoftwareSkill() {
    return (
        <div>
            <div className='skills-title'>What I do</div>
            <div className='skills-subtitle'>Full Stack Developer</div>
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