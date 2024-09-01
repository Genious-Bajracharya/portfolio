import Image from "next/image"
import OtherProjects from "@/app/components/OtherProjects"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { UilGithub, UilGlobe  } from '@iconscout/react-unicons'
import { Button } from "@/components/ui/button"
import Link from "next/link"
  


  
export default function Organic(){
    return(
        <div className=" bg-neutral-950 h-screen">
            <div className="flex flex-col lg:flex-row gap-5 p-4 lg:p-12">
            <div className="w-full lg:w-1/2 h-full">
                    <Carousel className="w-full h-full">
                        <CarouselContent>
                        {['/organic1.PNG', '/organic2.PNG', '/organic3.PNG', '/organic4.PNG', '/organic5.PNG', '/organic6.PNG', '/organic7.PNG'].map((src, index) => (
                            <CarouselItem key={index} className="h-96 lg:h-[450px] relative">
                            <Image
                                src={src}
                                alt={`Fitness Image ${index + 1}`}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-xl"
                            />
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-1" />
                        <CarouselNext className="absolute right-1" />
                    </Carousel>
                    </div>
                    
                {/* </div> */}
                <div className=" relative  lg:h-80   ">
                    <h1 className="text-4xl font-bold mb-4 text-white">Organic Healthcare</h1>
                    <p className=" text-white"> A fullstack E-commerce application for Organic Products</p>
                    <div className="flex flex-col justify-between  h-full gap-4">
                        <div>
                            <h1 className="text-2xl font-bold mb-4 text-white">Features</h1>
                            <li className=" text-white">E-mail Verification</li>
                            <li className=" text-white">Two-factor Authentication</li>
                            <li className=" text-white">E-payment (Khalti)</li>
                            <li className=" text-white">Functional Cart</li>
                            <li className=" text-white">Admin Panel(CRUD)</li>
                            <li className=" text-white">Stock Management</li>
                            <li className=" text-white">Order Management</li>
                        </div>
                        <div className="flex gap-5  ">
                            <Link href={'https://github.com/Genious-Bajracharya/Organic-Healthcare'}>
                                <Button className=" bg-transparent border border-cyan-400 "> <UilGithub className="text-cyan-400  "/> Github</Button>
                            </Link>
                            
                                
                        </div>
                    </div>  
                </div>
            </div>
            <OtherProjects/>
            
        </div>
    )
}