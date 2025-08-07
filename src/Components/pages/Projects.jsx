import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import Animation from '../common/Animation';

const projects = [
  {
    id: 1,
    title: "Green Basket – Full-Stack Grocery Platform",
    subtitle: "Next-Gen Shopping",
    description: "Modern grocery e-commerce app with real-time cart, product filters, secure checkout, dynamic admin dashboard, and Dockerized deployment. Built with React, Node.js, MongoDB, Express and TailwindCSS.",
    technologies: ["MERN", "TailwindCSS", "Docker", "JWT", "Razorpay", "Shadcn"],
    live: "https://github.com/Avijit89n/GreenBasket-Full-Stack-Grocery-E-commerce-Platform",
    image: "greenBusket.png"
  },
  {
    id: 2,
    title: "Home Automation System",
    description: "A smart home automation solution using Arduino and sensors to control lights and appliances remotely via smartphone. Features real-time status monitoring, energy efficiency, and seamless user interaction.",
    technologies: ["IOT", "Arduino IDE", "Electronics", "Esp32"],
    live: "https://github.com/Avijit89n/Home-automation",
    image: "home-auto.png"
  },
  {
    id: 3,
    title: "Smart parking system - IOT and RFID",
    subtitle: "Crypto Analytics",
    description: "An IoT-based solution using sensors and ESP32 to automate vehicle detection and parking slot management. Enables real-time monitoring, efficient space utilization, and automated gate control, hassle-free parking.",
    technologies: ["Arduino IDE", "Esp32", "RFID", "I2C", "SPI"],
    live: "https://github.com/Avijit89n/Smart-car-parking-with-IOT-and-RFID",
    image: "car.png"
  },
  {
    id: 4,
    title: "Tic Tac Toe Game",
    description: "A classic 2-player Tic Tac Toe game built with HTML, CSS, and JavaScript. Features turn-based logic, win detection, and a responsive, minimal UI.",
    technologies: ["HTML", "Css", "JavaScript"],
    live: "https://avijit89n.github.io/Tic-Tac-Toe---game/",
    image: "tic.png"
  },
  {
    id: 5,
    title: "Amazon UI Clone",
    subtitle: "Smart Home AI",
    description: "A sleek front-end clone of Amazon’s homepage built using HTML, Tailwind CSS. Designed to mimic core UI elements like the navbar, search bar, category links, and product grid with responsive styling.",
    technologies: ["HTML", "CSS"],
    live: "https://github.com/Avijit89n/Amazon-UI-Clone",
    image: "amazon.png"
  }
];

export default function Projects() {

  return (
    <section className="bg-[#121F28] text-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-end gap-2 mb-4">
            <h1 className="text-5xl md:text-7xl font-Audiowide">Featured</h1>
            <div className="h-3 w-3 bg-[#ef6957] animate-caret-blink rounded-full mb-3" />
          </div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-20 h-1 bg-[#ef6957] rounded-full" />
            <h2 className="text-3xl md:text-5xl font-Love-Ya-Like-A-Sister">Projects</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-[#ef6957] to-transparent rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <Animation animation="Down-up" className="transition-transform duration-500">
              <div onClick={() => !project.live || project.live != '#' ? window.open(project.live, "_") : ""}
                key={project.id}
                className="bg-[#1a2b35] border border-slate-700 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 group"
              >
                <div className="w-full h-52 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col gap-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-semibold font-Space-Grotesk text-[#ef6957] transition">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#ef6957] transition-transform group-hover:scale-110" />
                  </div>

                  <p className="text-gray-300 text-sm font-Patrick-Hand mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} className="bg-[#ef6957]/80 text-white px-2 py-1 text-xs rounded-md">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
}
