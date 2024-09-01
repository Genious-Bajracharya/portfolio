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


  
export default function BlogsApp(){
    return(
        <>
            <div className="bg-neutral-950 h-vh">
                <div className="flex flex-col lg:flex-row gap-5 p-4 lg:p-12">
                    <div className="w-full lg:w-1/2 h-full">
                    <Carousel className="w-full h-full">
                        <CarouselContent>
                        {['/blog1.jpeg', '/blog2.jpeg','/blog3.jpeg','/blog4.jpeg'].map((src, index) => (
                            <CarouselItem key={index} className="h-96 lg:h-[450px] relative">
                            <Image
                                src={src}
                                alt={`Weather Image ${index + 1}`}
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
                    <h1 className="text-4xl font-bold mb-4 text-white">Weather App</h1>
                    <p className="text-white">A Weather app made using React and weather Api </p>
                    <div className="flex flex-col justify-between h-full gap-4">
                        <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Features</h2>
                        <ul className="list-disc list-inside text-white space-y-2">
                            <li>Show current Temperature</li>
                            <li>Weather Forecast</li>
                            <li>Change location</li>
                            <li>Location Suggestion</li>
                        </ul>
                        </div>
                        <div className="flex gap-5">
                            <Link href={"https://github.com/Genious-Bajracharya/BlogApp"}>
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