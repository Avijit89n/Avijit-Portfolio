import { AlignJustify } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80;
      const elementPosition = el.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'backdrop-blur-xl border-b border-white/10 shadow-md'
          : 'backdrop-blur-lg border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between text-white font-Space-Grotesk">
        <div className="text-2xl font-Audiowide tracking-wide text-transparent bg-clip-text bg-white">
          Avijit Biswas
        </div>

        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 transition-all rounded-md ${
                  activeSection === item.id
                    ? 'text-white shadow-inner'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-[2px] bg-[#ef6957] rounded-full"></div>
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="md:hidden mx-2">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition">
                <AlignJustify className="text-white" />
              </button>
            </SheetTrigger>

            <SheetContent className="bg-black/40 backdrop-blur-xl text-white w-72 border-l border-white/10">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-xl font-Audiowide text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-100">
                  Menu
                </SheetTitle>
                <div className="h-px bg-white/10 mt-2"></div>
              </SheetHeader>

              <SheetDescription asChild>
                <nav className="flex flex-col gap-3 m-3">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left p-3 rounded-md font-medium transition-all ${
                        activeSection === item.id
                          ? 'bg-white/20 text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
