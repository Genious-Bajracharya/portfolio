'use client'
import { useState, FormEvent, ChangeEvent } from "react"
import { UilPhone,UilEnvelope,UilImport,UilLinkedin,UilGithub,UilFacebook ,UilInstagram   } from '@iconscout/react-unicons'
// import { useToast } from "@/hooks/use-toast"
import { useToast } from "@/hooks/use-toast"

interface ContactData {
    fullname: string;
    email: string;
    message: string;
  }

export default function Contact(){
    const { toast } = useToast()

    const [formData, setFormData] = useState<ContactData>({
        fullname: '',
        email: '',
        message: '',
      });

      const formHandle = async (e: FormEvent<HTMLFormElement>) => {
       
        e.preventDefault();
    
        try {
            
          const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), 
          });
    
          if (response.ok) {
            toast({
              title: "Contact Status",
              description: "Email sent Successfully!",
            })
            setFormData({ fullname: '', email: '', message: '' });
          } else {
            const data = await response.json();
            toast({
              title: "Contact Status",
              description: data.error || 'Error sending email.',
            })
          }
        } catch (error) {
          toast({
            title: "Contact Status",
            description: "Network error or server issue.",
          })
        }
      };
      

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };    
    // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

  
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
                <form onSubmit={formHandle} className="flex flex-col gap-5">
                    <input 
                        className=" bg-zinc-800 rounded-lg text-slate-400 h-12 w-full p-2" 
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        value={formData.fullname}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        className=" bg-zinc-800 rounded-lg text-slate-400 h-12 w-full p-2" 
                        name="email"
                        value={formData.email}
                        placeholder="Your Email" 
                        onChange={handleChange}
                        required
                    />
                    <textarea 
                        name="message"
                        rows={5} 
                        className=" bg-zinc-800 rounded-lg text-slate-400  w-full p-2"
                        value={formData.message}
                        placeholder="Your Message"
                        onChange={handleChange}
                        required
                    />
                    <button className=" p-2 bg-transparent  mx-auto border border-cyan-400 rounded-sm w-32 hover:bg-cyan-400 transition-colors  ease-in-out delay-200  ">  Submit </button>
                </form>
                
                
            </div>
        </div>
    )
}

