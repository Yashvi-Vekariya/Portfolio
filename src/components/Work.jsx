import React from 'react'
import WorkCard from './WorkCard'

function Work() {
    return (
        <>
            <div id='exp' className="md:flex justify-center pt-8 sm:pt-14 items-center h-3/4 selection:bg-[#59FF45] selection:text-black">
                <div className='font-[Anton] w-full sm:m-10 flex flex-col items-center'>
                    <h1 className='text-white text-center pb-6 sm:pb-10 text-4xl sm:text-5xl md:text-7xl'>Internships & Experience</h1>
                    <WorkCard 
                        num={1} 
                        company='Accenture' 
                        role="Data Analytics Virtual Internship" 
                        date="Mar 25 - Apr 25" 
                        description="Delivered impactful data-driven insights to the client by executing the full data lifecycle — including data cleaning, transformation, in-depth analysis, and visualization — which significantly enhanced reporting efficiency and improved decision-making accuracy by 15%."
                    />
                    <WorkCard 
                        num={2} 
                        company='Quantium' 
                        role="Data Analytics Virtual Job Simulation" 
                        date="Apr 25 - Apr 25" 
                        description="Analyzed consumer purchasing behavior using a large-scale grocery dataset (20K+ rows) and performed ad-hoc analysis with SQL and Python to uncover key trends, generating actionable business recommendations and delivering concise, data-driven reports to stakeholders."
                    />
                </div>
            </div>
        </>
    )
}

export default Work