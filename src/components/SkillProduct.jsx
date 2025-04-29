import React from 'react'
import SkillCard from './SkillCard'

function SkillProduct() {
    return (
        <div className="overflow-hidden flex justify-center pt-6 sm:pt-10 items-center selection:bg-[#59FF45] selection:text-black">
            <div className="font-[Anton] sm:w-7/12 w-full m-2 sm:m-10 px-4 sm:px-10 pt-6 sm:pt-10">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-4 flex-wrap border-b-[3px] border-[#59FF45]">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl text-white break-words pb-2">Product Analyst</h1>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h2 className="pt-4 sm:pt-8 text-white text-lg sm:text-xl font-[Poppins] leading-relaxed">
                        As a Product Analyst, you focus on understanding user needs, analyzing product performance, and identifying opportunities for improvement. 
                        You gather data from product usage, user feedback, and market trends to help shape product strategies. 
                        Your role bridges business goals with user expectations, ensuring the product evolves effectively and competitively.
                    </h2>
                </div>

                {/* Skills, Tools, Tech Concepts */}
                <div className="flex flex-col gap-8 pt-6 pb-4">

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start items-center">
                        <h3 className="text-white text-2xl sm:text-2xl font-[Anton]">Skill:</h3>
                        <SkillCard skill="User behavior analysis" />
                        <SkillCard skill="A/B Testing" />
                        <SkillCard skill="SQL" />
                        <SkillCard skill="Storytelling with data" />
                    </div>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start items-center">
                        <h3 className="text-white text-2xl sm:text-2xl font-[Anton]">Tools:</h3>
                        <SkillCard skill="Mixpanel" />
                        <SkillCard skill="Amplitude" />
                        <SkillCard skill="Power BI" />
                        <SkillCard skill="Tableau" />
                        <SkillCard skill="SQL" />
                        <SkillCard skill="Python" />
                        <SkillCard skill="Heap" />
                    </div>

                    {/* Tech Concepts */}
                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start items-center">
                        <h3 className="text-white text-2xl sm:text-2xl font-[Anton]">Tech Concepts:</h3>
                        <SkillCard skill="Funnels" />
                        <SkillCard skill="Retention" />
                        <SkillCard skill="Churn Rate" />
                        <SkillCard skill="Cohort Analysis" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SkillProduct
