'use client'
import { useState, FormEvent, ChangeEvent } from "react"
import { UilPhone,UilEnvelope,UilImport,UilLinkedin,UilGithub,UilFacebook ,UilInstagram   } from '@iconscout/react-unicons'

export default function Contact(){
    const [email,setemail]=useState('');
    const [fullname,setfullname]=useState('');
    const [message,setmessage]=useState('');
    const [formData, setFormData] = useState<ContactData>({
        Fullname: '',
        email: '',
        message: '',
      });


    const formhandle =(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        
        
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };    

    const handledownloadCv = ()=>{
        const link = document.createElement('a');
        link.href = '/cv.pdf'; 
        link.download = 'GeniousBajracharya_CV.pdf'; 
        link.click();
    }

    return(
        <div className="flex flex-col lg:flex-row gap-5 p-4 lg:px-20 justify-between h-auto lg:py-16  text-gray-200 " id="contact">
            <div className="flex flex-col gap-5">
                <h1 className="text-6xl font-bold mb-4 text-white">Contact Me</h1>
                <p className="flex items-center">
                    <UilEnvelope  className="mr-2 text-cyan-400" />
                    bajracharyagenious@gmail.com
                </p>
                <p className="flex items-center"><UilPhone  className="mr-2 text-cyan-400" />9861532823</p>
                <div className="flex gap-5">
                    <a href="https://www.linkedin.com/in/genious-bajracharya-573964211/"><UilLinkedin  className="  cursor-pointer rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-gray-200"/></a>
                    <a href="https://github.com/Genious-Bajracharya"><UilGithub className=" cursor-pointer rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-gray-200"/></a>
                    <a href="https://www.instagram.com/_genious.__/"><UilInstagram  className="cursor-pointer rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-gray-200"/></a>
                    <a href="https://www.facebook.com/profile.php?id=100009409115809"><UilFacebook  className=" cursor-pointer rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-gray-200"/></a>
                    
                </div>
                <button onClick={handledownloadCv} className=" p-2 bg-transparent border border-cyan-400 rounded-sm w-48 hover:bg-cyan-400 transition-colors  ease-in-out delay-200">Download CV  &#8595;</button>
            </div>
            <div className="lg:w-3/5  w-full ">
                <form onSubmit={formhandle} className="flex flex-col gap-5">
                    <input 
                        className=" bg-zinc-800 rounded-lg text-slate-400 h-12 w-full p-2" 
                        placeholder="Full Name"
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        className=" bg-zinc-800 rounded-lg text-slate-400 h-12 w-full p-2" 
                        placeholder="Your Email" 
                        onChange={handleChange}
                        required
                    />
                    <textarea 
                        rows={5} 
                        className=" bg-zinc-800 rounded-lg text-slate-400  w-full p-2"
                        placeholder="Your Message"
                        required
                    />
                    <button type="submit" className=" p-2 bg-transparent  mx-auto border border-cyan-400 rounded-sm w-32 hover:bg-cyan-400 transition-colors  ease-in-out delay-200  ">  Submit </button>
                </form>
                
            </div>
        </div>
    )
}

interface ContactData {
    Fullname: string;
    email: string;
    message: string;
  }