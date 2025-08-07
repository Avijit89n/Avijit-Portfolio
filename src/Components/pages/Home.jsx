import React from 'react'
import profile from '../../assets/ph.png'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
    SiCss3, SiHtml5, SiJavascript, SiReact, SiNodedotjs, SiExpress,
    SiMongodb, SiTailwindcss, SiGit, SiMysql, SiDocker,
} from "react-icons/si";

const logoStack = [
    { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiReact />, name: "React", color: "#61DAFB" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
    { icon: <SiExpress />, name: "Express", color: "#000000" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
    { icon: <SiGit />, name: "Git", color: "#F05032" },
    { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
    { icon: <SiDocker />, name: "Docker", color: "#2496ED" }
]

const logos = [...logoStack, ...logoStack]

function Home() {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            watchDrag: false,
        },
        [AutoScroll(
            {
                startDelay: 0,
                startOnInit: true,
                stopOnInteraction: false
            }
        )]
    )
    const scrollToSection = (id) => {
        const el = document.querySelector(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className='bg-main-background flex flex-col pt-[65px]'>
            <div className='flex min-h-[560px] relative flex-col lg:flex-row w-full '>
                <div className='lg:w-1/2 w-full flex flex-col justify-center z-30 relative md:px-12 px-6 space-y-5 mt-16 mb-24 md:0'>

                    <div className='flex items-end gap-2 animate-pop-up  opacity-0'>
                        <h1 className='text-white text-6xl font-semibold'>Hello</h1>
                        <div className='h-2 w-2 bg-[#ef6957] animate-caret-blink mb-2 rounded-full'></div>
                    </div>

                    <div className='flex items-end gap-4 delay-200 animate-pop-up flex-wrap opacity-0'>
                        <div className='w-40 h-2 mb-2 bg-[#ef6957] rounded-full'></div>
                        <h2 className='text-5xl font-Love-Ya-Like-A-Sister text-white'>
                            I'm Avijit
                        </h2>
                    </div>

                    <p className='text-white text-[16px] leading-relaxed font-Patrick-Hand text-justify delay-400 animate-pop-up  opacity-0'>
                        I'm a Full Stack Developer driven by curiosity and creativity, I design clean user interfaces and build scalable backend systems that bring ideas to life.
                    </p>

                    <p className='text-[#ef6957] text-base font-medium delay-600 animate-pop-up  opacity-0'>
                        Electronics Engineer <span className='text-white mx-2'>|</span> Full Stack Developer <span className='text-white mx-2'>|</span> Web Designer
                    </p>

                    <div className="flex gap-8 pt-2 text-sm delay-800 animate-pop-up opacity-0 text-white font-semibold flex-wrap">
                        <button onClick={() => scrollToSection("#contact")} className="cursor-pointer uppercase bg-transparent border border-[#ef6957] px-6 py-2 rounded-md text-[#ef6957] transition duration-200 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#ffffff33,-0.5rem_-0.5rem_#ef6957]">
                            Get in Touch
                        </button>
                        <button className="cursor-pointer uppercase bg-transparent border border-[#ef6957] px-6 py-2 rounded-md text-[#ef6957] transition duration-200 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#ffffff33,-0.5rem_-0.5rem_#ef6957]">
                            My Resume
                        </button>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full flex justify-center items-end overflow-hidden'>
                    <div className='h-[80vw] sm:h-[460px] opacity-0 delay-1700 animate-pulse z-0 w-[80vw] sm:w-[460px] ring-inset ring-[20px] shadow-[0_0_200px_70px_#EF69577b] ring-[#ef6957] absolute rounded-full'></div>
                    <div className='h-[80vw] sm:h-[460px] opacity-0 delay-700 animate-pop-up z-0 w-[80vw] sm:w-[460px] shadow-[0_0_100px_30px_#EF69577b] ring-inset ring-[20px] ring-[#ef6957] absolute rounded-full'></div>
                    <div className='h-[80vw] sm:h-[460px] opacity-0 delay-700 animate-pop-up z-0 w-[80vw] sm:w-[460px] shadow-[inset_0_0_100px_30px_#EF69577b] absolute rounded-full'></div>
                    <div className='z-10 flex justify-center items-end'>
                        <img src={profile} className="max-h-[500px] animate-Down-up" />
                        <div className='h-[300px] absolute bottom-0 w-full left-0 bg-gradient-to-t
                        from-main-background to-transparent'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-carosel-background z-40 animate-Enlarge'>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex bg-carosel-background">
                        {logos.map((item, index) =>
                            <div key={index} className="py-5 gap-2 px-15 borde bg-carosel-background flex justify-center items-center text-2xl select-none text-[#45535E] font-Anta flex-nowrap">
                                {item.icon}
                                <p className='text-lg'>{item.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
