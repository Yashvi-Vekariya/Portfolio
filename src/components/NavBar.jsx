import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = ['hero', 'about', 'skill', 'proj', 'exp'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const navItems = [
    { id: 'hero', label: '/' },
    { id: 'about', label: 'About' },
    { id: 'skill', label: 'Skills' },
    { id: 'proj', label: 'Projects' },
    { id: 'exp', label: 'Works' },
  ];

  return (
    <div className="fixed top-0 w-full pt-3 items-center selection:bg-[#59FF45] selection:text-black z-50">
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-center">
        <div className="rounded-full mb-8 z-[10000000] backdrop-blur-sm mt-5">
          <nav className="flex gap-8 lg:gap-[100px] relative justify-center w-full z-[100] rounded-full">
            {navItems.map((item) => (
              <a
                key={item.id}
                className={`px-3 py-2 lg:px-4 lg:py-2 rounded-full text-sm lg:text-base relative no-underline duration-300 ease-in ${
                  activeSection === item.id ? 'bg-[#59FF45] text-black' : 'text-white bg-transparent'
                }`}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                <span className="font-[Anton] text-base lg:text-xl">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-4 right-4 z-[100000]">
        <button
          className="text-white bg-[#2e2e2e] p-1 rounded-md"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-screen w-2/3 bg-black/95 p-6 shadow-lg z-[1000000] space-y-6 text-end pt-16">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`block px-4 py-3 rounded-full text-center text-2xl font-[Anton] ${
                activeSection === item.id ? 'bg-[#59FF45] text-black' : 'text-white'
              }`}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;