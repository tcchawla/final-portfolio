import React, { useContext } from 'react';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkills';
import { skillsSection } from "../../portfolio";
import "./Skills.scss";

export default function Skills() {
    // const {isDark} = useContext(StyleContext);
    if (!skillsSection.display) {
        return null;
    }
    return (
        <div className='dark-mode main' id='skills'>
            <div className='skills-main-div'>
                <div className='skills-text-div'>
                    <h1 className='dark-mode skills-heading'>{skillsSection.title}{" "}</h1>
                    <p 
                        className='dark-mode subTitle skills-text-subtitle'
                    >{skillsSection.subTitle}</p>
                    <SoftwareSkill />
                    <div>{skillsSection.skills.map((skills, i) => {
                        return (
                            <p
                                key={i}
                                className={"subTitle skills-text"}
                            >{skills}</p>
                        )
                    })}</div>
                </div>
            </div>
        </div>        
    );
}