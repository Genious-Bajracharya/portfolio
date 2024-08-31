'use client'
import Image from "next/image"
import { UilArrowRight } from '@iconscout/react-unicons'
import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"
export default function OtherProjects(){
    const router= useRouter()
    return(
        <div className=" p-4 lg:p-12 bg-neutral-950">
            <h1 className=" text-gray-200 text-4xl ">Other Projects</h1>
            <div className="flex flex-col lg:flex-row gap-5 mt-2 ">

                <div onClick={()=> router.push('/projects/organichealthcare')} className="  rounded-xl cursor-pointer group overflow-hidden">
                    <div className="h-full w-full relative ">
                        <Image
                            className="rounded-lg h-full w-full object-cover"
                            src="/organic5.png"
                            alt="Project 1"
                            style={{
                                width: '100%',
                                height: 'auto',
                              }}
                              width={500}
                              height={500}
                        />
                        <div className=" h-5/6 absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center p-4 rounded-b-lg opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <p>Organic Healthcare</p>
                                    <p>A simple app made for the purpose of writing blogs</p>
                                </div>
                                <Button variant={"outline"} className="mx-auto text-black hover:bg-transparent hover:text-gray-200" >See More <UilArrowRight/></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={()=> router.push('/projects/fakestore')} className="  rounded-xl cursor-pointer group overflow-hidden">
                    <div className="h-full w-full relative ">
                        <Image
                            className="rounded-lg h-full w-full object-cover"
                            src="/fakestore.jpeg"
                            alt="Project 1"
                            style={{
                                width: '100%',
                                height: 'auto',
                              }}
                              width={500}
                              height={500}
                        />
                        <div className=" h-5/6 absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center p-4 rounded-b-lg opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <p>Fake Store</p>
                                    <p>An e-commerce app made using Fake Store API</p>
                                </div>
                                <Button variant={"outline"} className="mx-auto text-black hover:bg-transparent hover:text-gray-200" >See More <UilArrowRight/></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={()=> router.push('/projects/fitnessapp')} className="  rounded-xl cursor-pointer group overflow-hidden">
                    <div className="h-full w-full relative ">
                        <Image
                            className="rounded-lg h-full w-full object-cover"
                            src="/Fitness1.png"
                            alt="Project 1"
                            style={{
                                width: '100%',
                                height: 'auto',
                              }}
                              width={500}
                              height={500}
                        />
                        <div className=" h-5/6 absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center p-4 rounded-b-lg opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <p>Fitness App</p>
                                    <p>A simple  platform for recording your fitness journey</p>
                                </div>
                                <Button variant={"outline"} className="mx-auto text-black hover:bg-transparent hover:text-gray-200" >See More <UilArrowRight/></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}