import React from 'react'
import SkillCard from './SkillCard'

function SkillMarketing() {
    return (
        <div className="overflow-hidden flex justify-center pt-6 sm:pt-10 items-center selection:bg-[#59FF45] selection:text-black">
            <div className="font-[Anton] sm:w-7/12 w-full m-2 sm:m-10 px-4 sm:px-10 pt-6 sm:pt-10">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-4 flex-wrap border-b-[3px] border-[#59FF45]">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl text-white break-words pb-2">Marketing Analyst</h1>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h2 className="pt-4 sm:pt-8 text-white text-lg sm:text-xl font-[Poppins] leading-relaxed">
                        As a Marketing Analyst, you evaluate marketing campaigns, customer behavior, and market trends to guide strategic decisions. You measure KPIs like ROI, conversion rates, and engagement to optimize marketing efforts. Your insights directly influence brand visibility, customer acquisition, and revenue growth by recommending data-driven marketing tactics.
                    </h2>
                </div>

                {/* Skills, Tools, Tech Concepts */}
                <div className="flex flex-col gap-8 pt-6 pb-4">

                    {/* Skills Section */}
                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start items-center pt-0 sm:pt-4">
                        <h3 className="text-white text-xl sm:text-2xl font-[Anton]">Skills:</h3>
                        <SkillCard skill="Funnel analysis" />
                        <SkillCard skill="Attribution modeling" />
                        <SkillCard skill="A/B Testing" />
                        <SkillCard skill="Campaign ROI analysis" />
                    </div>

                    {/* Tools Section */}
                    <div className="flex flex-wrap gap-3 justify-center sm:justify-start items-center pt-0 sm:pt-4">
                        <h3 className="text-white text-xl sm:text-2xl font-[Anton]">Tools:</h3>
                        <SkillCard skill="Google Analytics" />
                        <SkillCard skill="Meta Ads Manager" />
                        <SkillCard skill="Excel" />
                        <SkillCard skill="Tableau" />
                        <SkillCard skill="Power BI" />
                        <SkillCard skill="SQL" />
                        <SkillCard skill="Python (Matplotlib, Pandas)" />
                        <SkillCard skill="HubSpot" />
                        <SkillCard skill="SEMrush" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillMarketing