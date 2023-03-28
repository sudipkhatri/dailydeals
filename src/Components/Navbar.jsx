import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants"
import { menu, close } from '../Assets/Images/list';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav 
    className={`${styles.paddingX} w-full flex items-center
    py-5 fixed top-0 z-20 bg-primary  shadow-lg shadow-slate-100` }
    >
      <div className="w-full flex justify-between items-center 
      max-w-7xl mx-auto">
        <a href='/'><p className='text-white cursor-pointer text-xl'> Daily | Deals</p></a>
        <ul className='list-none hidden sm:flex 
        flex-row gap-10'>
          {
            navLinks.map((link)=>(
              <li key={link.id}
              className = {`${
                active === link.title ?
                "text-white" :
                "text-white"
              } hover:text-green-300 text-[18px]
              font-medium cursor-pointer `}
              onClick = {()=>{setActive(Link.title)}}
              >
                <a href={`${link.id}`} > {link.title} </a>
              </li>
            ))
          }
        </ul>
        <div className="sm:hidden flex flex-1
        justify-end items-center">
          <img 
          src={toggle ? close : menu} 
          alt="menu"
          className='w-[28px] h-[28px]
          object-contain cursor-pointer'
          onClick={()=>{setToggle(!toggle)}} />
          <div className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient bg-primary absolute top-20 right-0 mx-4 my-2
          min-w-[140px] z-10 rounded-xl`}>
             <ul className='list-none flex items-start  
        justify-end flex-col gap-4 '>
          {
            navLinks.map((link)=>(
              <li key={link.id}
              className = {`${
                active === link.title ?
                "text-white" :
                "text-secondary"
              } font-medium text-[16px]
              font-poppins cursor-pointer `}
              onClick = {()=>{
                setActive(Link.title);
                setToggle(!toggle);
              }}
              >
                <a href={`${link.id}`} > {link.title} </a>
              </li>
            ))
          }
        </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar