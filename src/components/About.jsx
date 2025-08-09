import React from 'react'
import { Github, Linkedin, Mail, User } from 'lucide-react';
import yashvi from '../assets/yashvi.jpeg'

function About() {
    return (
        <>
            <div id='about' className="md:flex justify-center items-center h-3/4 selection:bg-[#59FF45] selection:text-black">
                <div className='font-[Anton] gap-10 flex flex-col sm:flex-row sm:w-10/12 m-4 sm:m-10 mb-0 pt-5'>
                    <div className='m-4 sm:w-1/4 rounded-xl justify-center items-center text-center sm:flex hidden'>
                        <img src={yashvi} alt="" className='rounded-xl h-96 w-auto transition-all duration-500 hover:scale-105' />
                    </div>
                    <div className='m-4 sm:w-3/4'>
                        <div className='border-[#59FF45] border-b-[4px]'>
                            <h1 className='font-[Anton] text-4xl sm:text-6xl md:text-[6rem] lg:text-9xl text-white pb-4'>Data Analyst</h1>
                        </div>
                        <div className='pt-8 pb-8 '>
                            <p className='text-lg font-[poppins] sm:text-lg md:text-2xl text-white p-2'>Data Analytics and Product Strategy expert with proven success in building scalable data ecosystems, predictive models, and Generative AI solutions across cloud platforms including BigQuery, Snowflake, and AWS. Skilled in ML Ops, KPI engineering, A/B testing, and customer behavior analytics to deliver measurable growth and data monetization. Proficient in modern data stacks, ETL/ELT pipelines, and predictive intelligence frameworks that accelerate time-to-insight and improve operational efficiency. Experienced in AI integration, LLM automation, and data storytelling that enables enterprise digital transformation and informed decision-making. Focuses on aligning product roadmaps with data monetization strategies to deliver measurable business impact and competitive advantage.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="md:flex justify-center items-center h-3/4 selection:bg-[#59FF45] selection:text-black">
                <div className='font-[Anton] sm:gap-10 sm:flex flex-col sm:flex-row w-full sm:w-10/12 sm:m-10 justify-center items-center'>
                    <div className='sm:m-4 sm:p-0 pl-2 sm:pl-5 text-xl sm:text-2xl md:text-3xl text-white text-center sm:text-left mb-4 sm:mb-0'>Stay Updated With My Projects</div>
                    <div className='sm:m-4 mt-4 flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-10'>
                        <a href="https://github.com/Yashvi-Vekariya" className='bg-[#2e2e2e] hover:bg-[#282828] rounded-full'>
                            <Github className='m-3 sm:m-4 w-8 h-8 sm:w-10 sm:h-10 text-[#59FF45]' />
                        </a>
                        <a href="mailto:yashviivekariya@gmail.com" className='bg-[#2e2e2e] hover:bg-[#282828] rounded-full'>
                            <Mail className='m-3 sm:m-4 w-8 h-8 sm:w-10 sm:h-10 text-[#59FF45]' />
                        </a>
                        <a href="https://www.linkedin.com/in/yashvi-vekariya/" className='bg-[#2e2e2e] hover:bg-[#282828] rounded-full'>
                            <Linkedin className='m-3 sm:m-4 w-8 h-8 sm:w-10 sm:h-10 text-[#59FF45]' />
                        </a>
                        <a href="" className='bg-[#2e2e2e] hover:bg-[#282828] rounded-full'>
                            <User className='m-3 sm:m-4 w-8 h-8 sm:w-10 sm:h-10 text-[#59FF45]' />
                        </a>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default About