import React from 'react'
import SkillCard from './SkillCard'
import SkillProduct from './SkillProduct'
import SkillAI from './SkillAI'
import SkillMarketing from './SkillMarketing'

function Skills() {
    return (
        <>
            <div id='skill' className="md:flex justify-center pt-5 items-center h-3/4 selection:bg-[#59FF45] selection:text-black">
                <div className='font-[Anton] w-full sm:m-10 sm:flex sm:flex-col sm:items-center'>

                    <h1 className='text-white text-center pb-6 sm:pb-10 pt-14 text-5xl sm:text-7xl'>Skills</h1>

                    <SkillProduct />
                    <SkillMarketing />
                    <SkillAI />

                    <div className='sm:w-10/12 sm:flex sm:gap-3 pt-0 sm:pt-10 sm:pb-10 sm:justify-center sm:items-center'>
                        <div className='sm:w-1/2 text-center text-white text-xl sm:text-2xl sm:p-0 pb-8 sm:pb-0'>
                            <h1 className='text-center mb-3 sm:mb-4'>Other</h1>
                            <div className='flex flex-wrap gap-2 sm:gap-3 justify-center items-center pt-0 sm:pt-4'>
                                <SkillCard skill="Machine Learning" />
                                <SkillCard skill="NLP" />
                                <SkillCard skill="Data Visualization" />
                                <SkillCard skill="Data Cleaning" />
                                <SkillCard skill="Statistical Analysis" />
                                <SkillCard skill="EDA" />
                            </div>
                            <div className='flex flex-wrap gap-2 sm:gap-3 justify-center items-center pt-0 sm:pt-4'>
                                <SkillCard skill="Scikit-learn" />
                                <SkillCard skill="TensorFlow" />
                                <SkillCard skill="Pandas" />
                                <SkillCard skill="Streamlit" />
                                <SkillCard skill="Matplotlib" />
                                <SkillCard skill="Seaborn" />
                                <SkillCard skill="Google Sheet" />
                            </div>
                        </div>
                    </div>


                    <div className='sm:w-10/12 sm:flex sm:gap-3 pt-0 sm:pt-10 sm:pb-10 sm:justify-center sm:items-center'>
                        <div className='sm:w-1/2 text-center text-white text-xl sm:text-2xl sm:p-0 pb-8 sm:pb-0'>
                            <h1 className="mb-3 sm:mb-4">Soft Skills</h1>
                            <div className='flex flex-wrap gap-2 sm:gap-3 justify-center items-center pt-0 sm:pt-4'>
                                <SkillCard skill="Communication" />
                                <SkillCard skill="Collaboration" />
                            </div>
                            <div className='flex flex-wrap gap-2 sm:gap-3 justify-center items-center pt-2 sm:pt-4'>
                                <SkillCard skill="Strategic Thinking" />
                                <SkillCard skill="Conflict Resolution" />
                            </div>
                        </div>
                        <div className='sm:w-1/2 text-center text-white text-xl sm:text-2xl sm:p-0 pb-8 sm:pb-0'>
                            <h1 className="mb-3 sm:mb-4">Database</h1>
                            <div className='flex flex-wrap gap-2 sm:gap-3 justify-center items-center pt-0 sm:pt-4'>
                                <SkillCard skill="MongoDB" />
                                <SkillCard skill="MySQL" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills