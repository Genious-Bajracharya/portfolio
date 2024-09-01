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
  


  
export default function FitnessApp(){
    return(
        <>
            <div className="bg-neutral-950 h-vh">
                <div className="flex flex-col lg:flex-row gap-5 p-4 lg:p-12">
                    <div className="w-full lg:w-1/2 h-full">
                    <Carousel className="w-full h-full">
                        <CarouselContent>
                        {['/Fitness1.PNG', '/fitness2.PNG', '/fitness3.PNG', '/fitness4.PNG', '/fitness5.PNG'].map((src, index) => (
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
                    <div className="relative lg:h-80 flex flex-col justify-between">
                    <h1 className="text-4xl font-bold mb-4 text-white">Fitness App</h1>
                    <p className="text-white">A simple platform for recording your fitness journey</p>
                    <div className="flex flex-col justify-between h-full gap-4">
                        <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Features</h2>
                        <ul className="list-disc list-inside text-white space-y-2">
                            <li>Record and Track Workout</li>
                            <li>Set Goals</li>
                            <li>Check Progress</li>
                            <li>Functional Cart</li>
                            <li>Admin Panel (CRUD)</li>
                        </ul>
                        </div>
                        <div className="flex gap-5">
                            <Link href={"https://github.com/Genious-Bajracharya/FitnessApp"}>
                                <Button className="bg-transparent border border-cyan-400">
                                    <UilGithub className="text-cyan-400" /> Github
                                </Button>
                            </Link>
                        {/* <Button className="bg-transparent border border-cyan-400">
                            <UilGlobe className="text-cyan-400" /> Visit Site
                        </Button> */}
                        </div>
                    </div>
                    </div>
                </div>
                <div>
            <OtherProjects/>
         </div>
                 </div>
              
       
                 </>
            
    )
}