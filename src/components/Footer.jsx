import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="text-white flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 border-t-[1px] py-6 md:py-8 mt-12 border-cyan-200/10 border-solid rounded-md px-4 sm:px-8">
            <div className="flex justify-center items-center">
                <div className='flex gap-6 sm:gap-10'>
                    <a href="https://github.com/Yashvi-Vekariya" className='bg-[#2e2e2e] hover:bg-[#282828] rounded-full'>
                        <Github className='m-3 sm:m-4 w-6 h-6 sm:w-7 sm:h-7 text-[#59FF45]' />
                    </a>
                    <a href="mailto:yashviivekariya@gmail.com" className='bg-[#2e2e2e] hover:bg-[#282828] rounded-full'>
                        <Mail className='m-3 sm:m-4 w-6 h-6 sm:w-7 sm:h-7 text-[#59FF45]' />
                    </a>
                    <a href="https://www.linkedin.com/in/yashvi-vekariya/" className='bg-[#2e2e2e] hover:bg-[#282828] rounded-full'>
                        <Linkedin className='m-3 sm:m-4 w-6 h-6 sm:w-7 sm:h-7 text-[#59FF45]' />
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center text-center sm:text-right">
                <div className="text-foreground font-[poppins] font-medium text-sm sm:text-xl">
                    Made with
                    <div className="relative group w-fit inline-block">
                        <div className="cursor-pointer z-[9] text-[#f52b2b] rounded-xl w-fit mx-1" tabIndex="0" style={{ transform: 'none' }}>
                            &#10084;
                        </div>
                    </div> by <span className='text-[#59FF45] font-bold'>Yashvi</span>, Thank You!
                </div>
            </div>
        </footer>
    );
};

export default Footer;