import React from 'react'
import path from '../assets/Yashvi_Resume.pdf'
import { Github, Linkedin, Mail, User } from 'lucide-react';

function Hero() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = path;
        link.download = 'Yashvi_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div id='hero' className="md:flex justify-center sm:pt-32 pt-10 items-center h-3/4 selection:bg-[#59FF45] selection:text-black">
                <div className='font-[Anton] sm:w-10/12 m-5 sm:m-10 pt-5 sm:pt-10'>
                    <div className='text-start'>
                        <p className='text-[#59FF45] text-xl sm:text-2xl md:text-3xl font-extralight'>Converts Data To Story</p>
                        <h1 className='text-[6rem] sm:text-[6rem] md:text-[8rem] lg:text-[13rem] text-white leading-none'>Yashvi Vekariya</h1>
                    </div>

                    {/* <div className='flex flex-wrap gap-4 sm:gap-8 sm:m-4 sm:pb-4 pb-6 pt-4'>
                        <div className='bg-[#59FF45] w-fit rounded-full'>
                            <p className='p-3 sm:p-4 text-lg sm:text-2xl'>Product Analyst</p>
                        </div>
                        <div className='bg-[#59FF45] w-fit rounded-full'>
                            <p className='p-3 sm:p-4 text-lg sm:text-2xl'>AI Integration Analyst</p>
                        </div>
                    </div> */}

                    <div className='sm:text-start sm:m-4 sm:space-y-2 sm:pt-8 space-y-4'>
                        <p className='text-white font-[poppins] text-xl sm:text-2xl md:text-3xl pt-4'>I turn untapped data into competitive powerhouses for global businesses.</p>
                        {/* <p className='text-white text-xl sm:text-2xl md:text-3xl'> I focus on leveraging AI, advanced analytics, and business intelligence to deliver actionable insights and drive data-informed decision-making.</p> */}
                    </div>

                    <div className='flex gap-10 sm:m-4 sm:pt-8 pt-10'>
                        <button onClick={handleDownload} className='p-3 sm:p-4 text-white text-2xl sm:text-3xl md:text-4xl border-[#59FF45] border-2 w-fit sm:w-auto rounded-full hover:bg-[#59FF45] hover:text-black'>Download CV</button>
                    </div>
                    <div className="md:flex justify-center items-center h-3/4 selection:bg-[#59FF45] selection:text-black sm:pt-0 pt-10">
                        <div className='font-[Anton] sm:gap-10 sm:flex flex-col sm:flex-row w-full sm:w-10/12 sm:m-10 justify-center items-center'>
                            <div className='sm:m-4 sm:p-0 pl-2 sm:pl-5 text-xl sm:text-2xl md:text-3xl text-white text-center sm:text-left mb-4 sm:mb-0 font-[poppins]'>Stay Updated With My Projects</div>
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
                                <a href="https://yashvi-vekariya.vercel.app/" className='bg-[#2e2e2e] hover:bg-[#282828] rounded-full'>
                                    <User className='m-3 sm:m-4 w-8 h-8 sm:w-10 sm:h-10 text-[#59FF45]' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero