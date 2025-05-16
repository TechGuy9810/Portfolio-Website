import React from "react";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div className="min-h-[90vh] h-auto w-full lg:pl-20 lg:pr-20 pl-10 pr-10">
      <div className="bg-white text-black py-10">
        <h1 className="text-4xl font-bold mb-10 font-Monoton text-center">
          Selected Projects
        </h1>
        <div className="flex flex-col gap-8 lg:gap-10">

          {/* Project 3 */}
          <div className="bg-black rounded-lg shadow-lg flex lg:flex-row flex-col lg:items-center p-6 gap-2 justify-center lg:hover:scale-105 lg:transform lg:transition lg:duration-200">
            <div className="flex-shrink-0 w-full lg:w-1/3 h-full">
              <img
                src="./project3.png"
                alt="GPT - AI ChatApp"
                className="w-full h-48 lg:h-auto object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-grow space-y-4 h-full">
              <h2 className="lg:text-4xl text-2xl font-semibold text-white">
                GPT - AI ChatApp
              </h2>
              <div className="text-sm text-gray-300 flex-grow space-y-2">
                <p>Web AI ChatApp where users can chat with Google Gemini and can also attach media and ask queries.</p>
                <p>1) Integrated Google Gemini API.</p>
                <p>2) Smooth authentication using Clerk.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">React</span>
                <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Node.js</span>
                <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Express.js</span>
                <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Tailwindcss</span>
                <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">MongoDB</span>
                <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Google Gemini</span>
                <span className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white">Clerk</span>
              </div>
              <div className="mt-4">
                <div className="no-underline flex lg:gap-4 gap-4 w-auto whitespace-nowrap items-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/TechGuy9810/ChatAi"
                  >
                    <FaGithub className="lg:size-6 size-6 text-white cursor-pointer" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://chatai-production-ae38.up.railway.app"
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

          {/* Project 1 */}
          <div className="bg-black rounded-lg shadow-lg flex lg:flex-row flex-col lg:items-center p-6 gap-2 justify-center lg:hover:scale-105 lg:transform lg:transition lg:duration-200">
            <div className="flex-shrink-0 w-full lg:w-1/3 h-full">
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
                <p>A realtime Web ChatApp where users can chat, share media and emojis.</p>
                <p>Users can see who is currently online.</p>
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
                    href="https://chatapp-production-106e.up.railway.app"
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

          {/* Project 2 */}
          <div className="bg-black rounded-lg shadow-lg flex lg:flex-row flex-col lg:items-center p-6 gap-2 justify-center lg:hover:scale-105 lg:transform lg:transition lg:duration-200">
            <div className="flex-shrink-0 w-full lg:w-1/3 h-full">
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
                <p>It is integrated with razorpay payment gateway for payments and has a fully responsive design.</p>
                <p>1) Payment Gateway (Razorpay).</p>
                <p>2) Email Verification using nodemailer.</p>
                <p>3) User Authentication.</p>
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
                    href="https://hotelbooking-production-6ff3.up.railway.app/"
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
  );
};

export default Project;
