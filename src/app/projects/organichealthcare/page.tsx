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
  


  
export default function Organic(){
    return(
        <div className=" bg-neutral-950 h-screen">
            <div className="flex flex-col lg:flex-row gap-5 p-12">
                {/* <div className="lg:w-1/2 relative  h-96 rounded-xl"> */}
                    <Carousel 
                    
                        className="w-full lg:w-1/2  h-full" >
                        <CarouselContent className="">
                            <CarouselItem className="  text-white ">
                                <Image src="/fakestore.jpeg"
                                        alt="profile"
                                        height={700}
                                        width={900}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                          }}
                                        // layout="fill"
                                        className=" rounded-xl object-cover  h-full  "
                                        />
                                    
                            </CarouselItem>
                            <CarouselItem className=" bg-red-600 h-76">1</CarouselItem>
                            <CarouselItem>2</CarouselItem>
                            <CarouselItem>3</CarouselItem>
                            
                        </CarouselContent >
                        <CarouselPrevious className=" absolute left-1"/>
                        <CarouselNext className=" absolute right-1" />
                        
                    </Carousel>
                    
                {/* </div> */}
                <div className=" relative  lg:h-80   ">
                    <h1 className="text-4xl font-bold mb-4 text-white">Organic Healthcare</h1>
                    <p className=" text-white"> An ecommerce for organic products yada yada yada</p>
                    <div className="flex flex-col justify-between  h-full gap-4">
                        <div>
                            <h1 className="text-2xl font-bold mb-4 text-white">Features</h1>
                            <li className=" text-white">E-mail Verification</li>
                            <li className=" text-white">Two-factor Authentication</li>
                            <li className=" text-white">E-payment (Khalti)</li>
                            <li className=" text-white">Functional Cart</li>
                            <li className=" text-white">Admin Panel(CRUD)</li>
                        </div>
                        <div className="flex gap-5  ">
                            <Button className=" bg-transparent border border-cyan-400 "> <UilGithub className="text-cyan-400  "/> Github</Button>
                            <Button className=" bg-transparent border border-cyan-400"><UilGlobe className="text-cyan-400   "/> Visit Site</Button>
                                
                        </div>
                    </div>  
                </div>
            </div>
            <OtherProjects/>
            
        </div>
    )
}