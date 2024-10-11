import React from 'react'
import Button from './Button';
import Certificate from './Certificate';
import Internship from './Internship';
import Project from './Project';

import { IoCalendar } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import ThemeToggleButton from './ThemeToggleButton';
import { FaArrowCircleUp } from "react-icons/fa";

import { Ripple, initTWE, } from "tw-elements";
initTWE({ Ripple });

function toTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

function Details() {
    return (
        <>
        <div className="p-0 overflow-scroll text-black rounded-lg border border-4 border-black dark:text-white dark:bg-gray-800 dark:border-white" id='top'>
            <ThemeToggleButton/>

            {/* <button className="border border-2 border-black px-2 py-1 m-2 rounded">Download Resume</button> */}
            <div className='flex justify-end m-3 gap-2'>
            <a className='' href='../assets/BORAGADDADILEEP KUMAR_portfolio.pdf' download={true}>
            <button type="button"
                data-twe-ripple-init
                data-twe-ripple-color="black"
                className="inline-block rounded text-black border border-1 border-black dark:text-white dark:border-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-primary-0 transition duration-150 ease-in-out hover:text-black hover:shadow-black focus:bg-white focus:text-black focus:shadow-black focus:outline-none focus:ring-0 active:bg-black active:text-black active:shadow-black motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                    <span className='flex gap-1 justify-center items-center'><FaDownload/> Download Resume</span>
                    
                    </button>
            </a>
            </div>
            
            

            {/* profile summary section */}
            <div className='m-3 p-3 rounded  opacity-95'>
                <h1 className="Profile my-2 font-bold text-xl">Profile</h1>
                <p className='m-3'>A highly motivated and dedicated recent graduate with a solid foundation in web development, Salesforce, and Artificial Intelligence - Machine Learning. Equipped with both academic knowledge and hands-on experience, I am committed to delivering results and continuously enhancing my technical skills. Eager to contribute to a dynamic work environment, I am seeking an opportunity to apply my expertise while furthering my professional growth .</p>
            </div>
            {/* internships section */}
            <div className='m-3 p-3 rounded  opacity-95'>
                <h1 className="Experience my-2 font-bold text-xl ">Experience</h1>

                <Internship name={'DATA ANALYTICS with TABLEAU  Internship'} duration={'Jan 2024 - Apr 2024'} organization={"SmartInternz"}
                    items={[' cleaning and analyzing data to uncover insights, using Tableau to create interactive visualizations and dashboards that support business decision-making.', 'applying analytical skills to align data with business goals, while effectively communicating findings and collaborating with teams to solve real-world problems using data.']}
                />

                <Internship name={'SOFTWARE TESTING AUTOMATION Internship'} duration={'May 2023 - Aug 2023'} organization={'SmartInternz'}
                    items={[' focusing on creating and executing automated test scripts using tools like Selenium and programming languages such as Java or Python to enhance testing efficiency and accuracy..', 'working closely with development teams, using tools like JIRA and Git to track bugs, report defects, and ensure continuous integration, while also gaining experience with test automation frameworks and performance testing tools.']}
                />

                <Internship name={'Salesforce Developer Internship'} duration={'Sep 2022 - Nov 2022'} organization={'SmartInternz'}
                    items={['Enhanced knowledge by 65% through engagement with the Salesforce community.', 'Accomplished 7 modules and 2 super-badge modules, acquiring practical skills in Apex programming, Relationship & Process Automation, and Lightning components.']}
                />

            </div>

            {/* Education section */}
            <div className='m-3 p-3 rounded  opacity-95'>
                <h1 className="Education my-2 font-bold text-xl">Education</h1>
                <div className="internship_2 p-3 my-1">
                    <span className='flex items-center justify-between'>
                        <h1 className='font-semibold text-lg'>Bachelor of Technology (B.Tech)</h1>
                        <span className='flex justify-center items-center gap-3'>
                            <IoCalendar /><h4 className='font-bold text-md'>2020 - 2024</h4>
                        </span>
                    </span>
                    <h1 className=''> Computer Science and Engineering (DATA SCIENCE)</h1>
                    <span className='flex items-center justify-between'>
                        <h6 className='text-sm'>CHEBROLU ENGINEERING COLLEGE </h6>
                        <span className='flex justify-center items-center gap-3'>
                            <h4 className=' text-sm'>7.5 CGPA</h4>
                        </span>
                    </span>
                </div>
            </div>

            {/* Skills section */}

            <div className="m-3 p-3 rounded ">
                <h1 className="Skills my-2 font-bold text-xl ">Skills</h1>
                <div className="p-3 my-1">
            
                    <Button skill={'python programming'} />
                    <Button skill={'Html'} />
                    <Button skill={'css'} />
                    <Button skill={'javascript'} />
                    <Button skill={'bootstrap'} />
                    <Button skill={'tailwind-CSS'} />
                    <Button skill={'ECMAScript 6+'} />
                    <Button skill={'wordpress'} />
                    <Button skill={'react js'} /> 
                    <Button skill={'mongodb'} />
                    <Button skill={'mysql'} />
                    <Button skill={'git'} />
                    <Button skill={'github'} />
                    <Button skill={'salesforce development'} />
                    <Button skill={'machine learning'} />
                    <Button skill={'data science'} />
                    <Button skill={'cloud'}/>

                </div>

            </div>

            {/* Certification section */}
            <div className='m-3 p-3 rounded '>
                <h1 className="Certifications my-2 font-bold text-xl">Certifications</h1>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1'>

                <Certificate name={'DATA SCIENCE for BEGINNERS'} duration={'APRIL 2023'} organization={'future skills prime'} skills={'Python'} url={'https://www.linkedin.com/posts/dileep-kumar-boragadda-43293822a_activity-7227009522375016448-6HLo?utm_source=share&utm_medium=member_desktop'} />

                <Certificate name={'SOFTWARE TESTING AUTOMATION'} duration={'AUG 2023'} organization={'SmartInternz'} skills={'Automation Testing'} url={'https://www.linkedin.com/posts/dileep-kumar-boragadda-43293822a_virtual-internship-on-software-testing-automation-activity-7226849531269627905-hqTT?utm_source=share&utm_medium=member_desktop'} />

                <Certificate name={'DATA ANALYTICS with TABLEAU'} duration={'APRIL 2024'} organization={'SmartInternz'} skills={'Python'} url={'https://www.linkedin.com/posts/dileep-kumar-boragadda-43293822a_activity-7227005512066678784-YKZA?utm_source=share&utm_medium=member_desktop'} />

                <Certificate name={'Web Development With WordPress'} duration={'october 2022'} organization={'Ganga Apps'} skills={'Web Development, WordPress'} url={'https://www.linkedin.com/posts/dileep-kumar-boragadda-43293822a_activity-7238786428984250368-Kzrk?utm_source=share&utm_medium=member_desktop'} />

                <Certificate name={'ETHICAL HACKING and CYBER SECURITY'} duration={'Mar 2022'} organization={'LYFAUX'} skills={'HACKING (basic)'} url={'https://www.linkedin.com/posts/dileep-kumar-boragadda-43293822a_activity-7230475737370087425-WCEZ?utm_source=share&utm_medium=member_desktop'} />


                <Certificate name={'Salesforce Developer Virtual Internship'} duration={'Oct 2022'} organization={'SmartInternz'} skills={'Salesforce Developement'} url={'https://www.linkedin.com/posts/dileep-kumar-boragadda-43293822a_activity-7227005703498907648-zwTX?utm_source=share&utm_medium=member_desktop'} />

                </div>
            </div>

            {/* Projects section */}
            <div className='m-3 p-3 rounded '>
                <h1 className="Projects my-2 font-bold text-xl ">Projects</h1>

                <Project name={'CryptCloud Secure and Expressive Data Access Control for Cloud Storage'} duration={'Feb 2024 - May 2024'} items={['CryptCloud+ aims to provide a secure and user-friendly system for data access control in cloud storage environments. It offers strong encryption and mitigates the risk of unauthorized access by introducing traceability mechanisms.']} skills={' java, java script, mysql, neatbeans'} url={'https://github.com/DILEEP-KUMAR-7/Crypt-Cloud-Secure-and-Expressive'} />

            </div>
        </div>
            <div  className='flex justify-end items-end p-1 text-4xl rounded-full cursor-pointer dark:bg-white dark:text-black dark:border-white fixed bottom-0 right-0 z-10 bg-black text-white dark:bg-white dark:text-black'>
            <button onClick={toTop}><FaArrowCircleUp/></button>
            </div>
        </>
    )
}

export default Details