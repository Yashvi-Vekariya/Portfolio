import React from 'react';
import { Github } from 'lucide-react';

function ProjectCard({ image = '', type, current, title, description, num = 1, about, skill, link = 'https://github.com/Yashvi-Vekariya' }) {
  return (
    <>
      <div className="overflow-hidden md:flex justify-center pt-6 sm:pt-10 items-center h-3/4 selection:bg-[#59FF45] selection:text-black">
        <div className='font-[Anton] sm:w-10/12 w-full m-2 sm:m-10 px-4 sm:px-10 pt-6 sm:pt-10'>

          {/* Header Section with Number and Title */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4'>
            <div className='flex items-center gap-4 sm:gap-6 flex-wrap'>
              <h1 className='bg-[#59FF45] text-black rounded-full p-3 sm:p-4 px-4 sm:px-6 text-lg sm:text-xl font-bold font-[poppins]'>{num}</h1>
              <h1 className='text-3xl sm:text-4xl md:text-6xl text-white break-words'>{title}</h1>
            </div>

            {/* GitHub Icon for larger screens only */}
            <div className='hidden sm:block'>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <Github className='text-[#59FF45] bg-[#2e2e2e] hover:bg-[#282828] rounded-full p-3 sm:p-4 font-bold w-16 sm:w-20 h-16 sm:h-20' />
              </a>
            </div>
          </div>

          <p className='pt-4 pb-4 sm:pt-4 text-white text-xl sm:text-2xl'>Project : {type}</p>

          {/* Visit link for mobile screens only */}
          <div className='sm:hidden pb-3 sm:pb-4 pl-2'>
            <a href={link} target='_blank' rel='noopener noreferrer' className='text-[#59FF45] underline text-lg sm:text-xl'>
              Visit
            </a>
          </div>

          {image && (
            <div>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt="project"
                  className="rounded-2xl sm:rounded-3xl transition-all duration-500 hover:scale-105 w-full"
                />
              </a>
            </div>
          )}

          <div>
            <h1 className='pt-4 sm:pt-8 text-white text-xl sm:text-2xl'>{description}</h1>
          </div>

          <div className='text-start space-y-2 pt-2'>
            <p className='text-white text-base sm:text-xl font-medium font-[Poppins]'>{about}</p>
          </div>

          <div className='flex flex-wrap gap-4 sm:gap-8 pt-4 sm:pt-6 pb-3 sm:pb-4'>
            <div className='bg-[#59FF45] w-fit rounded-full sm:rounded-full font-[Poppins]'>
              <p className='p-2 text-base sm:text-xl'>{skill}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ProjectCard;
