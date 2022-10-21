import './App.css';
import { useState } from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { BiCodeAlt, BiSun } from "react-icons/bi"
import img from "./assets/spaceman.png";

function App() {
const [darkMode, setDarkMode] = useState(false);

  return (
      <>
        <div className={darkMode ? "dark" : ""}>
          <section id='container' className='min-h-screen pb-16 dark:bg-gray-900'>
            <nav className='dark:text-white sticky top-0'>
              <div className='flex justify-between items-center px-8 h-24 mb-12 sm:px-16'>
                <span className='flex flex-col justify-center font-burtons uppercase font-semibold'>
                  developedby<span>Andy</span>
                </span>
                <ul className='flex items-center'>
                  <li className='mr-4 cursor-pointer' onClick={() => setDarkMode(!darkMode)}  >
                    {darkMode ? < BiSun className='text-white'/> : <BsFillMoonStarsFill />}
                  </li>
                  <li>
                    <a href="#home" className='bg-gradient-to-r from-cyan-500 to-teal-700 py-2 px-4 text-white rounded-md'>Resume</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div>
              <div id='afternav' className='flex flex-col items-center px-8 mb-12 sm:px-16'>
                <div className='flex flex-col items-center'>
                  <h2 className='text-teal-700 text-4xl font-medium mb-4 sm:text-5xl lg:text-6xl'>Anderson Simeon</h2>
                  <h3 className='text-black text-2xl mb-8 lg:text-4xl dark:text-white'>Developer</h3>
                </div>
                <div className='flex justify-center items-center mb-12'>
                  <p className='leading-8 text-lg text-gray-500 md:w-1/2 dark:text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
                </div>
                <div className='flex items-center gap-16 text-gray-600'>
                  <span className='text-5xl cursor-pointer hover:animate-pulse'> <AiFillGithub /> </span>
                  <span className='text-5xl cursor-pointer hover:animate-pulse'> <AiFillTwitterCircle /> </span>
                  <span className='text-5xl cursor-pointer hover:animate-pulse'> <AiFillLinkedin /> </span>
                </div>
              </div>
            </div>
            <div>
              <div id='image' className='flex justify-center px-8 mb-12 sm:px-16'>
                <div className='flex justify-center items-center bg-gradient-to-b from-teal-500 w-80 rounded-full h-80 overflow-hidden relative sm:w-96 sm:h-96'>
                  <img src={img} alt="" className='w-full h-full object-contain animate-bounce hover:=cursor-pointer' />
                </div>
              </div>
            </div>
            <div>
              <div id='services' className='flex flex-col justify-start items-center px-8 sm:px-16'>
                <div className='flex flex-col items-center mb-16'>
                  <h3 className='text-black text-2xl font-semibold mb-4 dark:text-white'>Services I Offer</h3>
                  <p className='text-gray-800 text-md w-4/5 mb-2 dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut <span className='text-teal-500'>aliquip</span> ex ea commodo consequat, Lorem ipsum. Ut enim ad minim veniam, quis <span className='text-teal-500'>nostrud doloripsum</span> ullamco laboris nisi ut aliquip consequat.</p>
                  <p className='text-gray-800 text-md w-4/5 dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, Lorem ipsum. Ut enim ad minim veniam, quis nostrud doloripsum ullamco laboris nisi ut aliquip consequat.</p>
                <div>
              </div>
                </div>
                <div id='services_card' className='flex flex-col md:flex-row items-start gap-12'>
                  <div className='flex flex-col items-center py-8 px-8 shadow-lg dark:shadow-gray-200'>
                    <div className='text-9xl mb-4 dark:text-white'>
                      <BiCodeAlt />
                    </div>
                    <div className='flex flex-col items-center px-12'>
                      <h3 className='text-lg mb-2 dark:text-white'>Frontend Developer</h3>
                      <p className='text-md mb-2 dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      <p className='text-lg text-teal-500'>Tools I use</p>
                      <ul className='flex flex-col items-center text-gray-600 dark:text-gray-400'>
                        <li className='text-md'>React Js</li>
                        <li className='text-md'>Next Js</li>
                        <li className='text-md'>Redux / Tailwind</li>
                      </ul>
                    </div>
                  </div>
                  <div className='flex flex-col items-center py-8 px-8 shadow-lg dark:shadow-gray-200'>
                    <div className='text-9xl mb-4 dark:text-white'>
                      <BiCodeAlt />
                    </div>
                    <div className='flex flex-col items-center px-12'>  
                      <h3 className='text-lg mb-2 dark:text-white'>Backend Developer</h3>
                      <p className='text-md mb-2 dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                      <p className='text-lg text-teal-500'>Tools I use</p>
                      <ul className='flex flex-col items-center text-gray-600 dark:text-gray-400'>
                        <li className='text-md'>Node Js</li>
                        <li className='text-md'>Express Js</li>
                        <li className='text-md'>Mongo DB</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
  );
}

export default App;
