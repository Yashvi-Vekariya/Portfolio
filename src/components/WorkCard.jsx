import React from 'react'

function WorkCard({ num, company, role, description, date }) {
    return (
        <>
            <div className="md:flex justify-center pt-6 sm:pt-10 items-center h-3/4 selection:bg-[#59FF45] selection:text-black">
                <div className='font-[Anton] sm:w-9/12 m-4 sm:m-10 pt-3 sm:pt-5'>
                    <div className='sm:flex sm:items-center sm:justify-between mb-4 sm:mb-6'>
                        <div className='flex items-center gap-4 sm:gap-6'>
                            <h1 className='bg-[#59FF45] text-black rounded-full p-3 sm:p-4 px-4 sm:px-6 text-lg sm:text-xl font-bold'>{num}</h1>
                            <h1 className='text-3xl sm:text-4xl md:text-6xl text-white'>{company}</h1>
                        </div>
                        <p className='text-white text-lg sm:text-2xl sm:p-0 pt-3 ml-12 sm:ml-2'>{date}</p>
                    </div>

                    <div className='sm:p-0 pt-4 sm:pt-6 ml-0 sm:ml-0'>
                        <h1 className='bg-[#59FF45] text-black w-fit rounded-full p-2 sm:p-4 px-4 sm:px-6 text-lg sm:text-xl md:text-2xl'>{role}</h1>
                    </div>

                    <div>
                        <h1 className='pt-4 sm:pt-8 text-white font-[poppins] text-lg sm:text-xl md:text-2xl'>{description}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkCard