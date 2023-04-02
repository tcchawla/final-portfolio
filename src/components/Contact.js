import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

export const Contact = () => {
    const formRef = useRef();
    const[form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const[loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    
        emailjs
          .send(
            "service_f0qjj9j",
            "template_ry4hk2u",
            {
              from_name: form.name,
              to_name: "Tarun Chawla",
              from_email: form.email,
              to_email: "tc.chawla2000@gmail.com",
              message: form.message,
            },
            "Fs9afkKLs4b28x8PK"
          )
          .then(
            () => {
              setLoading(false);
              alert("Thank you. I will get back to you as soon as possible.");
    
              setForm({
                name: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);
    
              alert("Ahh, something went wrong. Please try again.");
            }
          );
      };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 3)}
                className='flex-[0.75] bg-black-80 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText} style={{ "padding-left": 0, "list-style": "none", "font-size": "30px", "margin-bottom": "7px", "margin-top": "0px", "text-align": "center" }}>Get in touch</p>
                <h3 className={styles.sectionHeadText} style={{ "padding-left": 0, "list-style": "none", "font-size": "30px", "margin-bottom": "7px", "margin-top": "0px", "text-align": "center" }}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white
                        font-medium mb-2'>Your Name</span>
                        <input 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Alex Doe"
                        className='bg-tertiary py-3 px-6
                        placeholder:text-secondary 
                        text-white 
                        rounded-lg outline-none
                        border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white
                        font-medium mb-2'>Your Email Address</span>
                        <input 
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className='bg-tertiary py-3 px-6
                        placeholder:text-secondary 
                        text-white 
                        rounded-lg outline-none
                        border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white
                        font-medium mb-2'>Your message</span>
                        <textarea
                        rows={7} 
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Hi, you are really awesome 😁!"
                        className='bg-tertiary py-3 px-6
                        placeholder:text-secondary 
                        text-white 
                        rounded-lg outline-none
                        border-none font-medium'
                        />
                    </label>

                    <button
                        type="submit"
                        className='bg-tertiary py-3 px-8 outline-none
                        w-fit text-white font-bold shadow-md 
                        shadow-primary rounded-xl'
                    >
                        {loading ? 'Sending...' : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");