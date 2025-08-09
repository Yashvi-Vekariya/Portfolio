import React from 'react'

function SkillCard({skill}) {
  return (
    <>
        <p className='bg-[#2e2e2e] hover:bg-[#282828] rounded-full p-2 sm:p-4 text-md sm:text-base md:text-lg font-bold font-[Poppins] text-white transition-all duration-500 hover:scale-110 text-center w-fit mb-4'>{skill}</p>
    </>
  )
}

export default SkillCard