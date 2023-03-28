import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 

const ProjectCard = ({ 
    index,
    name, 
    description, 
    tags, 
    image, 
    source_code_link
}) => {
    return(
        <motion.div variants={fadeIn("up", "spring", 
        index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed:450
                }}
                className="bg-tertiary p-5 rounded-2xl
                sm:w-[360px] w-full"
            >
                <div className='relative w-full h-[230px]'>
                    <img 
                        src={image}
                        alt={name}
                        className="object-cover rounded-2xl"
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open
                            (source_code_link, "_blank")}
                            className="black-gradient w-10 h-10
                            rounded-full flex justify-center
                            items-center cursor-pointer" 
                        >
                            <img 
                                src={github}
                                alt="github"
                                className='w-1/2 h-1/2
                                object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

export const Projects = () => {
    return (
        <div className='m-auto'>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`} style={{ "padding-left": 0, "list-style": "none", "font-size": "30px", "margin-bottom": "7px", "margin-top": "0px", "text-align": "center" }}>My Work</p>
                <h2 className={`${styles.sectionHeadText}`} style={{"padding-left": 0, "list-style": "none", "font-size": "3.5rem", "margin-bottom": "7px", "margin-top": "0px", "text-align": "center"}}>Projects.</h2>
            </motion.div>

            <div className='w-full flex flex-wrap justify-center'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary justify-text-center text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects demonstrates my skills
                    and experience through solving real-world
                    problems. Each project is described briefly
                    with links to code repositories. All these
                    projects reflect my ability to solve complex
                    problems, learn and adapt new technologies.
                </motion.p>
            </div>

            <div className='mt-1 flex flex-wrap gap-7 justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard 
                    key={`project-${index}`} 
                    index={index}
                    {...project}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Projects, "");