import React from "react"
import { useState, useEffect } from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaDownload } from "react-icons/fa6";


function Profile() {
  const[image,setImage]=useState('./bunty.jpg');

  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = reader.result;
      setImage(newImage);
      localStorage.setItem('profileImage',newImage)

    };
      reader.readAsDataURL(file);
  };
  return (
    <div>
      <div className="p-4 flex flex-col items-center justify-items-center sticky top-0 rounded-lg border border-4 border-black text-black dark:bg-gray-800 dark:text-white dark:border-white">  {/** bg-gradient-to-tl from-black via-transparent to-black  text-gray-400 */}

        <label htmlFor="fileInput" style={{cursor:'pointer'}} >
        <img src={image} alt="" className='border border-4 border-blue-500 rounded-full w-48 h-48 align-center flex  justify-items-center' /> {/* style border-4 border-blue-500 */}

        {/* <FaPenToSquare /> */}
        </label>

        <input type="file" onChange={handleImageChange} accept="image/*" id="fileInput" className="d-none invisible" />

        <span className="name text-2xl text-center font-bold p-4">BORAGADDA DILEEP KUMAR</span> {/* Name of the Candidate */}

        <span className='designation text-lg font-medium text-center p-2'>Web Developer</span>{/* Designation of the Candidate */}

        <div className="contact py-4"> 
          <span className="flex items-center justify-items-center gap-2 text-lg p-1 m-0"><IoMail className="text-yellow-500" /><a className='email text-sm  text-center' href='mailto:dileepkumarnaidu2345@gmail.com'>dileepkumarnaidu2345@gmail.com</a></span> {/* email */}
          <span className="flex items-center justify-items-center gap-2 text-lg p-1 m-0"><FaPhoneAlt className="text-blue-500" /><a className='phone text-sm  text-center' href='+91 9492502345'>+91 9492502345</a></span>{/* phone number */}
          <span className="flex flex-row items-center justify-items-center gap-2 text-lg p-1 m-0">
            <FaGithub className="text-black dark:text-white" /> <a className='text-sm' href="https://github.com/DILEEP-KUMAR-7" target='blank'>https://github.com/DILEEP-KUMAR-7</a>
          </span>
          <span className="flex flex-row items-center justify-items-center gap-2 text-lg p-1 m-0">
            <TfiLinkedin className="text-blue-400 dark:text-blue-600" /> <a className='text-sm' href="https://www.linkedin.com/in/dileep-kumar-boragadda-43293822a/" target='blank'>https://www.linkedin.com/in/dileep-kumar-boragadda-43293822a/</a></span>
          {/* <span className="flex flex-row items-center justify-items-center gap-2 text-lg p-1 m-0"> */}
            {/* <SiLeetcode className="text-orange-500" /> <a className='text-sm' href="" target='blank'></a></span> */}
          <a className='flex justify-center m-3' href='../assets/BORAGADDADILEEP KUMAR_portfolio.pdf' download={true} target="blank">
            <button type="button"
              data-twe-ripple-init
              data-twe-ripple-color="black"
              className="inline-block rounded bg-transparent text-black border border-1 border-black dark:border-white dark:text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-primary-0 transition duration-150 ease-in-out hover:text-black hover:shadow-black focus:bg-black focus:text-white focus:shadow-black focus:outline-none focus:ring-0 active:bg-black active:text-white active:shadow-black motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong m-1">
              <span className='flex gap-1 justify-center items-center'><FaDownload /> Download Resume</span>

            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile