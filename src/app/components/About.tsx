"use client"
import Image from "next/image"
import { useState } from "react"
export default function About(){
    const [about,setAbout]=useState(0);

    const renderContent = () => {
        switch (about) {
          case 0:
            return (
                <div className="flex flex-row gap-10">
                    <div className="text-gray-200">
                        <h1 className=" text-cyan-500 text-xl">Frontend</h1>
                        <p>• React JS  </p>
                        <p>• Next JS</p>
                    </div>
                    <div className="text-gray-200">
                        <h1 className=" text-cyan-500 text-xl">Backend</h1>
                        <p>• Node JS  </p>
                    </div>
                    
                </div>
            );
          case 1:
            return (
                <div className="text-gray-200">
                    <h1 className=" text-cyan-500 text-xl">2024(May-Aug)</h1>
                    <p> Web Developer Intern at Saptacode Technologies</p>
                   
                </div>
            );
          case 2:
            return (
                <div className="flex flex-col gap-5 text-white">
                    <div >
                        <h1 className=" text-cyan-500 text-xl">(2018-2020) </h1>
                        <p className="">Modern Indian School</p>
                    </div>
                    <div>
                        <h1 className=" text-cyan-500 text-xl">(2021-2023) </h1>
                        <p>Bachelors in Computer Science(Hons) from Herald College Kathmandu</p>
                    </div>
                </div>
            );
          default:
            return null;
        }
      };

    return(
        <div className="px-4 lg:px-20 lg:py-16 lg:h-screen" id="about">
            <div className="  flex  flex-col lg:flex-row h-full my-8 lg:my-8 gap-8">
                <div className="lg:w-1/3 relative h-96  lg:h-full">
                    <Image src="/about.jpg"
                    alt="profile"
                    // layout="fill"
                    fill
                    className=" rounded-lg object-cover "
                    />
                </div>
                <div className=" w-full  lg:w-1/2 ">
                    <div>
                        <h1 className="text-6xl font-bold mb-4 text-white">About Me</h1>
                        <p className="text-lg text-gray-200 my-4"> An Aspiring and Enthusiastic Web Developer and Designer ,  passionate about  
                            crafting visually appealing and user-friendly websites. Proficient in HTML, CSS,
                            and JavaScript, React, Next I enjoy translating ideas into engaging online experiences.  
                            Eager to learn and collaborate in a creative environment while bringing
                            innovative designs to life. 
                        </p>
                    </div>
                    <div>   
                        <div className=" flex gap-8 text-gray-200 font-bold text-2xl ">
                            <p onClick={()=>setAbout(0)} className="  hover:border-b-2 hover:border-cyan-400 hover:-translate-y-1 hover:scale-110  transition-all duration-500 cursor-pointer ">Skills</p>
                            <p onClick={()=>setAbout(1)} className="  hover:border-b-2 hover:border-cyan-400 hover:-translate-y-1 hover:scale-110 transition-all duration-500 cursor-pointer">Experience</p>
                            <p onClick={()=>setAbout(2)} className="  hover:border-b-2 hover:border-cyan-400 hover:-translate-y-1 hover:scale-110 transition-all duration-500 cursor-pointer">Education</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}