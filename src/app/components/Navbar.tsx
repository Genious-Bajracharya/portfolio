'use client'
import { useRouter } from "next/navigation"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { useState } from "react"
  import { UilBars } from '@iconscout/react-unicons'
  import { Button } from "@/components/ui/button"

  
export default function Navbar(){
    const router= useRouter()
    const [menu,setMenu]=useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
      }

    const about =()=>{
        router.push('#about')
    }
    
    return(
        <div className=" h-16 w-full py-4 px-6  lg:px-16 flex justify-between bg-transparent">
            <div className=" cursor-pointer text-white text-4xl"> <span className="text-cyan-400">G</span>enie</div>
            <div className="hidden lg:block">
                <div className=" flex gap-5 text-white ">
                    <div onClick={()=> router.push('#about')}  className=" hover:border-b-2 hover:border-cyan-400 hover:-translate-y-1 hover:scale-110 transition-all duration-500 cursor-pointer">About</div>
                    <div onClick={()=> router.push('#contact')} className=" hover:border-b-2 hover:border-cyan-400 hover:-translate-y-1 hover:scale-110 transition-all duration-500 cursor-pointer">Contact</div>
                    <div onClick={()=> router.push('#projects')} className=" hover:border-b-2 hover:border-cyan-400 hover:-translate-y-1 hover:scale-110  transition-all  duration-500 cursor-pointer">Projects</div>
                </div>
            </div>
            
            <div className="lg:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        
                            <UilBars className=" text-white hover:bg-gray-200"/>
                       
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-neutral-950 text-gray-200 bg-opacity-60">
                        
                        <DropdownMenuItem onClick={()=>router.push('#about')}>About</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={()=>router.push('#contact')}>Contact</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={()=>router.push('#projects')}>Projects</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                
            </div>
        </div>
    )
}

// https://geniousbajracharya.netlify.app/