import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='bg-slate-400 pt-5 flex flex-row justify-between'>
        <div>
          <h2 className='font-semibold text-white'><span>A</span>stha <span>J</span>ain</h2>
        </div>

        {/* Hamburger menu icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            <GiHamburgerMenu />
          </button>
        </div>
        
        {/* set sm:hidden */}
        <div className={`hidden lg:flex flex-row mx-auto sm:hidden`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github1"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>

        {/* div for mobile menu */}
        
        <div className={isOpen?"inline-block":"hidden"}>
                <ul className='bg-white '>
                    <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                >
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                >
                    About
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                >
                    Contact
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/github1"
                    className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                >
                    Github
                </NavLink>
                </li>
                </ul>
        </div>

        {/* div for social-media-handles */}
        <div className='hidden lg:flex justify-center space-x-2 text-orange-800'>
          <a href="https://www.linkedin.com/in/astha-jain-902380240/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/Asts01" target="_self" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


// import React from 'react'
// import {Link,NavLink} from 'react-router-dom';
// import { FaInstagram,FaGithub,FaLinkedin } from "react-icons/fa";
// import { GiHamburgerMenu } from 'react-icons/gi'

// function Navbar() {
//   return (
//     <div>
//         <nav className='bg-slate-400 pt-5 flex flex-row'>
//             <div>
//                 <h2 className='font-semibold text-white'><span>A</span>stha <span>J</span>ain</h2>
//             </div>
//             {/* for 5 sub-menus */}
//             <div className='flex flex-row mx-auto'>
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 pb-2">
//                             <li>
//                                 <NavLink
//                                 to="/"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/about"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/contact"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Contact
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                 to="/github1"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Github
//                                 </NavLink>
//                             </li>
                            
//                         </ul>
//             </div>
//             {/* div for social-media-handles
//              */}
//              <div>
//                 <div className='flex justify-center space-x-2 text-orange-800'>
//                     <a href="https://www.linkedin.com/in/astha-jain-902380240/" target="_blank" rel="noopener noreferrer">
//                     <FaLinkedin />
//                     </a>
//                     <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
//                     <FaInstagram />
//                     </a>
//                     <a href="https://github.com/Asts01" target="_blank" rel="noopener noreferrer">
//                     <FaGithub />
//                     </a>
//                 </div>
//             </div>

//         </nav>
//     </div>
//   )
// }

// export default Navbar
