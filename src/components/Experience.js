import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
// import { SectionWrapper } from '../hoc'; 
import { textVariant } from '../utils/motion';
import '../App.css';

export const ExperienceCard = ({experience}) => (
    <VerticalTimelineElement
        contentStyle={ {background: '#1d1836', 
        color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className='flex justify-center items-center w-full h-full rounded-xl hover:scale-125 transition-all duration-500 cursor-pointer"'>
                <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[80%] h-[80%] object-contain rounded-3xl"
                />
            </div>
        }
    >
        <div>
            <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            <p className='text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
        </div>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
                <li 
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px]
                    pl-1 tracking-wider"
                >
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)

export function Experience() {
    return (
        <div className='experience'>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText} style={{ "padding-left": 0, "list-style": "none", "font-size": "30px", "margin-bottom": "7px", "margin-top": "0px", "text-align": "center" }}>What I have done so far</p>
                <h2 className={styles.sectionHeadText} style={{"padding-left": 0, "list-style": "none", "font-size": "3.5rem", "margin-bottom": "7px", "margin-top": "0px", "text-align": "center"}}>Work Experience</h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

// export default SectionWrapper(Experience, "work");