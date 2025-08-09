import React from 'react'
import SkillCard from './SkillCard'
import SkillProduct from './SkillProduct'
import SkillAI from './SkillAI'
import SkillMarketing from './SkillMarketing'

function Skills() {
    return (
        <>
            <div id='skills' className="md:flex justify-center pt-5 items-center h-3/4 selection:bg-[#59FF45] selection:text-black">
                <div className='font-[Anton] w-full sm:m-10 sm:flex sm:flex-col sm:items-center'>

                    <h1 className='text-white text-center pb-6 sm:pb-10 pt-14 text-5xl sm:text-7xl'>Skills</h1>

                    <div className='font-[Anton] flex flex-col md:flex-row md:w-full m-4 sm:m-10 mb-6 pt-5'>
                        
                        <div className='w-full md:w-1/4 border-b-2 md:border-b-0 md:border-r-2 border-[#484848] sm:m-4 m-0 mt-4 pb-6 md:pb-0 md:pr-2'>
                            <div>
                                <h1 className='text-white text-xl sm:text-2xl md:text-4xl mb-6 text-center'>Programming Languages</h1>
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center'>
                                <SkillCard skill="Python (Advanced)" />
                                <SkillCard skill="SQL (Advanced)" />
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center mt-2'>
                                <SkillCard skill="R (Intermediate)" />
                                <SkillCard skill="Java (Basic)" />
                            </div>
                        </div>

                        <div className='w-full md:w-1/4 border-b-2 md:border-b-0 md:border-r-2 border-[#484848] sm:m-4 m-0 mt-4 pb-6 md:pb-0'>
                            <div>
                                <h1 className='text-white text-xl text-center sm:text-2xl md:text-4xl mb-6'>Analytics Tools</h1>
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center'>
                                <SkillCard skill="Power BI" />
                                <SkillCard skill="Tableau" />
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center mt-2'>
                                <SkillCard skill="Google Looker Studio" />
                                <SkillCard skill="Excel" />
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center mt-2'>
                                <SkillCard skill="Jupyter" />
                                <SkillCard skill="Google Colab" />
                            </div>
                        </div>

                        <div className='w-full md:w-1/4 border-b-2 md:border-b-0 md:border-r-2 border-[#484848] sm:m-4 m-0 mt-4 pb-6 md:pb-0'>
                            <div>
                                <h1 className='text-white text-xl text-center sm:text-2xl md:text-4xl mb-6'>Machine Learning</h1>
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center'>
                                <SkillCard skill="Scikit-learn" />
                                <SkillCard skill="TensorFlow" />
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center mt-2'>
                                <SkillCard skill="ARIMA" />
                                <SkillCard skill="Hyperparameter Tuning" />
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center mt-2'>
                                <SkillCard skill="Model Evaluation" />
                            </div>
                        </div>

                        <div className='w-full md:w-1/4 sm:m-4 m-0 mt-4'>
                            <div>
                                <h1 className='text-white text-xl text-center sm:text-2xl md:text-4xl mb-6'>Libraries/Frameworks</h1>
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center'>
                                <SkillCard skill="Pandas" />
                                <SkillCard skill="NumPy" />
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center mt-2'>
                                <SkillCard skill="Matplotlib" />
                                <SkillCard skill="Seaborn" />
                                <SkillCard skill="Streamlit" />
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center mt-2'>
                                <SkillCard skill="Beautiful Soup" />
                            </div>
                        </div>

                    </div>

                    {/* Second row of skills - responsive */}
                    <div className='font-[Anton] gap-1 flex flex-col md:flex-row md:w-3/4 m-4 sm:m-10 mb-6 pt-5'>
                        
                        <div className='w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-[#484848] sm:m-4 m-0 mt-4 pb-6 md:pb-0'>
                            <div>
                                <h1 className='text-white text-xl sm:text-2xl md:text-4xl mb-6 text-center'>Databases/Cloud</h1>
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center'>
                                <SkillCard skill="MySQL" />
                                <SkillCard skill="MongoDB " />
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center mt-2'>
                                <SkillCard skill="Google BigQuery" />
                                <SkillCard skill="AWS (Basic)" />
                            </div>
                        </div>

                        <div className='w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-[#484848] sm:m-4 m-0 mt-4 pb-6 md:pb-0'>
                            <div>
                                <h1 className='text-white text-xl text-center sm:text-2xl md:text-4xl mb-6'>Other</h1>
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center'>
                                <SkillCard skill="Gen Ai" />
                                <SkillCard skill="Statistical Analysis" />
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center mt-2'>
                                <SkillCard skill="A/B Testing" />
                                <SkillCard skill="Predictive Modeling" />
                            </div>
                        </div>

                        <div className='w-full md:w-1/3 sm:m-4 m-0 mt-4'>
                            <div>
                                <h1 className='text-white text-xl text-center sm:text-2xl md:text-4xl mb-6'>Soft Skills</h1>
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center'>
                                <SkillCard skill="Strategic Thinking" />
                                <SkillCard skill="Communication" />
                            </div>
                            <div className='flex flex-wrap gap-2 justify-center mt-2'>
                                <SkillCard skill="Collaboration" />
                                <SkillCard skill="Conflict Resolution" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills