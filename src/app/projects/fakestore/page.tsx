import Image from "next/image"
import OtherProjects from "@/app/components/OtherProjects"
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { UilGithub, UilGlobe  } from '@iconscout/react-unicons'
import { Button } from "@/components/ui/button"
  


  
export default function FakeStore(){
    return(
        <div className=" bg-neutral-950 h-screen">
            <div className="flex flex-col lg:flex-row gap-5 p-4 lg:p-12">
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
                            
                        </CarouselContent >
                        <CarouselPrevious className=" absolute left-1"/>
                        <CarouselNext className=" absolute right-1" />
                        
                    </Carousel>
                    
                {/* </div> */}
                <div className=" relative  lg:h-80   ">
                    <h1 className="text-4xl font-bold mb-4 text-white">Fake Store</h1>
                    <p className=" text-white"> An ecommerce for organic products yada yada yada</p>
                    <div className="flex flex-col justify-between  h-full gap-4">
                        <div>
                            <h1 className="text-2xl font-bold mb-4 text-white">Features</h1>
                            <li className=" text-white">Made Using React Js and Css</li>
                            <li className=" text-white">Responsive </li>
                            <li className=" text-white">Fake Store API</li>

                        </div>
                        <div className="flex gap-5  ">
                            <Link href={"https://github.com/Genious-Bajracharya/OnlineStore"}>
                                <Button className=" bg-transparent border border-cyan-400 "> <UilGithub className="text-cyan-400  "/> Github</Button>
                            </Link>
                            <Link href={'https://geniefakestore.netlify.app/'}>
                                <Button  className=" bg-transparent border border-cyan-400"><UilGlobe className="text-cyan-400   "/> Visit Site</Button>
                            </Link>
                                
                        </div>
                    </div>  
                </div>
            </div>
            <OtherProjects/>
            
        </div>
    )
}