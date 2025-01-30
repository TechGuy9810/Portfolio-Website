import React from "react";
import { FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger,matchMedia);

const Project2 = () => {
    useGSAP(()=>{
// Set initial properties for each project card
gsap.set(".project-card1, .project-card2, .project-card3", {
    scale: 0,
    opacity: 0.3,
  });
  
  // Create a timeline for each project card
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".projectParentDiv", // Reference the parent container
      start: "top 80%", // Start when the top of the container is at 80% of the viewport
      end: "bottom 20%", // End when the bottom of the container is at 20% of the viewport // Smooth animation while scrolling
      markers:true
    },
  });
  
  // Add animations for each project card
  tl.to(".project-card1", {
    scale: 1,
    opacity: 1,
    duration: 0.7, // Duration of the animation
  })
    .to(".project-card2", {
      scale: 1,
      opacity: 1,
      duration: 0.7,
    })
    .to(".project-card3", {
      scale: 1,
      opacity: 1,
      duration: 0.7,
    });
    });
  return (
<div className='projectParentDiv flex flex-col min-h-[90vh] h-auto w-full lg:pl-20 lg:pr-20 pl-10 pr-10'>
  <div className="bg-black text-white py-10">
    <h1 className="text-4xl font-bold mb-10 font-Monoton text-center">Selected Projects</h1>
    <div className="flex flex-col gap-8 lg:gap-12">
      {/* Project 1: Realtime Web ChatApp */}
      <div className="project-card1 bg-black border-2 border-white rounded-lg shadow-lg flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-20 lg:space-x-6 p-6">
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src="./project2.png"
            alt="Realtime Web ChatApp"
            className="w-full h-48 lg:h-auto object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-grow space-y-4 h-full">
          <h2 className="lg:text-4xl text-2xl font-semibold text-white">
            Realtime Web ChatApp
          </h2>
          <div className="text-sm text-gray-300 flex-grow space-y-2">
            <p>A realtime Web ChatApp where users can chat, share media and emojis. Users can see who is currently online.</p>
            <p>They can also see which person is currently typing messages.</p>
            <p>1) Users can send Media.</p>
            <p>2) Can see who is online & who is typing.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">React</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Node.js</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Express.js</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Tailwindcss</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">MongoDB</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">socket.io</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Cloudinary</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">multer</span>
          </div>
          <div className="mt-4">
            <div className="no-underline flex lg:gap-4 gap-4 w-auto whitespace-nowrap items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/TechGuy9810/ChatApp"
              >
                <FaGithub className="lg:size-6 size-6 text-white cursor-pointer" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://chatapp-production-e859.up.railway.app/"
                className="relative inline-flex items-center justify-center pt-1 pb-1 pl-4 pr-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-lg shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  live
                </span>
                <span className="relative invisible">live</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2: Hotel Reservation Site */}
      <div className="project-card2 bg-black border-2 border-white rounded-lg shadow-lg flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-20 lg:space-x-6 p-6">
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src="./project1.png"
            alt="Hotel Reservation Site"
            className="w-full h-48 lg:h-auto object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-grow space-y-4 h-full">
          <h2 className="lg:text-4xl text-2xl font-semibold text-white">
            Hotel Reservation Site
          </h2>
          <div className="text-sm text-gray-300 flex-grow space-y-2">
            <p>Full-stack Hotel Reservation Site where users can search, arrange prices, and book hotels.</p>
            <p>It is integrated with razorpay payment gateway for payments and have full responsive design.</p>
            <p>1) Payment Gateway (Razorpay)</p>
            <p>2) Email Verification using nodemailer.</p>
            <p>3) User Authentication</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">React</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Node.js</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Express.js</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Bootstrap</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">MongoDB</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">razorpay</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">nodemailer</span>
          </div>
          <div className="mt-4">
            <div className="no-underline flex lg:gap-4 gap-4 w-auto whitespace-nowrap items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/TechGuy9810/HotelSite"
              >
                <FaGithub className="lg:size-6 size-6 text-white cursor-pointer" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hotelbooking-production-542f.up.railway.app/"
                className="relative inline-flex items-center justify-center pt-1 pb-1 pl-4 pr-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-lg shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  live
                </span>
                <span className="relative invisible">live</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3: GPT - AI ChatApp */}
      <div className="project-card3 bg-black border-2 border-white rounded-lg shadow-lg flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-20 lg:space-x-6 p-6">
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src="./project2.png"
            alt="GPT - AI ChatApp"
            className="w-full h-48 lg:h-auto object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-grow space-y-4 h-full">
          <h2 className="lg:text-4xl text-2xl font-semibold text-white">
            GPT - AI ChatApp
          </h2>
          <div className="text-sm text-gray-300 flex-grow space-y-2">
            <p>Web AI ChatApp where users can chat with google gemini and can also attach media and ask queries.</p>
            <p>1) Integrated Google gemini API.</p>
            <p>2) Smooth authentication using Clerk.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">React</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Node.js</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Express.js</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Tailwindcss</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">MongoDB</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Google Gemini</span>
            <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">clerk</span>
          </div>
          <div className="mt-4">
            <div className="no-underline flex lg:gap-4 gap-4 w-auto whitespace-nowrap items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/TechGuy9810/ChatApp"
              >
                <FaGithub className="lg:size-6 size-6 text-white cursor-pointer" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://offsetcommunications.africa"
                className="relative inline-flex items-center justify-center pt-1 pb-1 pl-4 pr-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-lg shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  live
                </span>
                <span className="relative invisible">live</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Project2
