import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import {fadeIn,textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc'

const ServiceCard =({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max:45,
          speed:450,
          scale:1
        }} className='bg-tertinary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}> 
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p varaints={fadeIn("","",0.1,1)} 
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Hello there, I am fourth-year Computer Engineering Student at Tribhuvan University, Pulchowk Campus. I have a keen interest in web development. 
      I love to explore new things trending in the field of AI and blockchain as well.
    </motion.p>
    {/* <div className='mt-4 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index ={index} {...service}/> 
      ))}
    </div> */}
    </>
  )
}

export default SectionWrapper(About,"about")
// export default About