import React, { useRef } from 'react';
import {
    SiCss3, SiHtml5, SiJavascript, SiReact, SiNodedotjs, SiExpress,
    SiMongodb, SiTailwindcss, SiGit, SiMysql, SiDocker, SiArduino
} from "react-icons/si";
import aboutPhoto from "../../assets/about.png"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Animation from '../common/Animation';

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
    { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
    { icon: <SiArduino />, name: "Arduino IDE", color: "#00979C" }
]

function About() {

    return (
        <div className="relative z-10 lg:px-10 px-6 py-20 justify-center items-center text-white flex bg-main-background">
            <Animation animation="Down-up" className="transition-transform duration-500">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 h-full flex justify-center items-center relative overflow-visible w-full">

                        <div className="absolute text-[#ef6957]/50 text-2xl sm:text-5xl lg:text-6xl left-0 top-[30%] rotate-[12deg] select-none">&lt;/&gt;</div>
                        <div className="absolute text-[#ef6957]/40 text-xl sm:text-4xl lg:text-5xl right-[10%] bottom-[25%] rotate-[-8deg] select-none">&#123; &#125;</div>

                        <div className="relative z-10 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] h-[360px] sm:h-[410px] md:h-[450px] lg:h-[500px] rounded-[1.5rem] sm:rounded-[2rem] border-2 border-[#ef6957]/30 overflow-hidden ">
                            <img
                                src={aboutPhoto}
                                alt="Avijit"
                                className="w-full h-full object-contain scale-[1.015]"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black/80 text-[#ef6957] text-xs sm:text-sm px-3 sm:px-4 py-2 tracking-wide">
                        // Developer. Engineer. Creator.
                            </div>
                        </div>
                        <div className='w-[140px] sm:w-[170px] md:w-[185px] lg:w-[200px] h-[140px] sm:h-[170px] md:h-[185px] lg:h-[200px] -z-10 rounded-full absolute top-[50%] -translate-x-3 shadow-[0_0_70px_2px_white] sm:shadow-[0_0_80px_2px_white] lg:shadow-[0_0_100px_2px_white]'></div>
                        <div className='w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] h-[360px] sm:h-[410px] md:h-[450px] lg:h-[500px] rounded-[1.5rem] sm:rounded-[2rem] absolute top-0 shadow-[0_0_60px_#ef695740] sm:shadow-[0_0_70px_#ef695740] lg:shadow-[0_0_80px_#ef695740]'></div>
                        <div className='w-[70px] sm:w-[85px] lg:w-[100px] h-[70px] sm:h-[85px] lg:h-[100px] rounded-full absolute top-20 sm:top-24 -translate-x-3 shadow-[0_0_50px_2px_white] sm:shadow-[0_0_60px_2px_white] lg:shadow-[0_0_70px_2px_white]'></div>
                    </div>


                    <div className="lg:w-1/2 mx-auto space-y-10 mt-10 lg:mt-0">

                        <div>
                            <h2 className="text-3xl sm:text-4xl font-semibold border-b-4 inline-block border-[#ef6957] pb-1">
                                About Me
                            </h2>
                        </div>

                        <div className="text-base sm:text-lg leading-relaxed font-Patrick-Hand">
                            <p>
                                I'm <span className="text-[#ef6957]">Avijit Biswas</span>, a passionate technologist with a unique blend of software and hardware expertise. My background in both <span className="text-[#ef6957]">Electronics Engineering</span> and <span className="text-[#ef6957]">Full Stack Web Development</span> allows me to build complete systems from circuit boards to cloud platforms. I love solving real-world problems through innovative technical solutions.
                            </p>

                            <p className="mt-4">
                                <span className="bg-[#ef6957] text-lg sm:text-xl px-2">Technical Proficiencies:</span><br />
                                • Full Stack Development (MERN stack)<br />
                                • Cloud Infrastructure<br />
                                • DevOps <br />
                                • IoT Systems & Embedded Programming<br />
                                • Robotics & Automation<br />
                                • Arduino/PIC Microcontrollers<br />
                            </p>
                        </div>

                        <div className='flex gap-3 sm:gap-4 lg:gap-5 flex-wrap justify-center items-center'>
                            {logoStack.map((Icon, i) => (
                                <Tooltip key={i}>
                                    <TooltipTrigger asChild>
                                        <div style={{ color: Icon.color }} className='text-2xl sm:text-3xl bg-[#45535E] rounded-full h-12 w-12 sm:h-14 sm:w-14 lg:h-15 lg:w-15 flex justify-center items-center'>{Icon.icon}</div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{Icon.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                </div>
            </Animation >
        </div>

    );
}

export default About;