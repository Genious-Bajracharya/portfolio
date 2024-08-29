'use client'
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { UilArrowRight } from '@iconscout/react-unicons'
export default function Project(){
    const router= useRouter()

    return(
        <div className="px-20 py-18"  id="projects">
            <h1 className="text-4xl font-bold mb-4 text-white">My Projects</h1>
            <div className="flex flex-col gap-5 justify-between  lg:flex-row">
               
                <div onClick={()=> router.push('/projects/organichealthcare')} className="  rounded-xl cursor-pointer group overflow-hidden">
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
                                    <p>Organic Healthcare</p>
                                    <p>A simple app made for the purpose of writing blogs</p>
                                </div>
                                <Button variant={"outline"} className="mx-auto text-black hover:bg-transparent hover:text-gray-200" >See More <UilArrowRight/></Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={()=> router.push('/projects/organichealthcare')} className="relative h-full rounded-xl cursor-pointer group overflow-hidden">
                    <div className="h-full">
                        <Image
                            className="rounded-lg h-full object-cover"
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
                                    <p>A simple app made for the purpose of writing blogs</p>
                                </div>
                                <Button variant={"outline"} className="mx-auto text-black hover:bg-transparent hover:text-gray-200" >See More <UilArrowRight/></Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={()=> router.push('/projects/organichealthcare')} className="relative h-full rounded-xl cursor-pointer group overflow-hidden">
                    <div className="h-full">
                        <Image
                            className="rounded-lg h-full object-cover"
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
                                    <p>Blogs APP</p>
                                    <p>A simple app made for the purpose of writing blogs</p>
                                </div>
                                <Button variant={"outline"} className="mx-auto text-black hover:bg-transparent hover:text-gray-200" >See More <UilArrowRight/></Button>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="grid items-center my-4">
                <button className="p-2 bg-transparent text-gray-200 mx-auto border border-cyan-400 rounded-sm w-32 ">
                See More
                </button>
            </div>
        </div>


    )
}