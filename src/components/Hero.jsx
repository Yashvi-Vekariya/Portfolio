import React from 'react'
import path from '../assets/YASHVI_CV.pdf'

function Hero() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = path;
        link.download = 'YASHVI_CV.pdf';
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

                    <div className='flex flex-wrap gap-4 sm:gap-8 sm:m-4 sm:pb-4 pb-6 pt-4'>
                        <div className='bg-[#59FF45] w-fit rounded-full'>
                            <p className='p-3 sm:p-4 text-lg sm:text-2xl'>Product Analyst</p>
                        </div>
                        <div className='bg-[#59FF45] w-fit rounded-full'>
                            <p className='p-3 sm:p-4 text-lg sm:text-2xl'>Marketing Analyst</p>
                        </div>
                        <div className='bg-[#59FF45] w-fit rounded-full'>
                            <p className='p-3 sm:p-4 text-lg sm:text-2xl'>AI Integration Analyst</p>
                        </div>
                    </div>

                    <div className='sm:text-start sm:m-4 sm:space-y-2 sm:pt-8 space-y-4'>
                        <p className='text-white text-xl sm:text-2xl md:text-3xl'>I'm <span className='text-[#59FF45]'>Yashvi</span>, a Data Analyst, currently exploring the depths of Machine Learning, based in India.</p>
                        <p className='text-white text-xl sm:text-2xl md:text-3xl'> I've been working with data since 2024. I also love contributing to open source to give back to the community.</p>
                    </div>

                    <div className='flex gap-10 sm:m-4 sm:pt-8 pt-10'>
                        <button onClick={handleDownload} className='p-3 sm:p-4 text-white text-2xl sm:text-3xl md:text-4xl border-[#59FF45] border-2 w-fit sm:w-auto rounded-full hover:bg-[#59FF45] hover:text-black'>Download CV</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero