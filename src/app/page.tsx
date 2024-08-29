import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className=" bg-neutral-950">
      <div className="bg-[url('https://img.freepik.com/free-photo/3d-portrait-people_23-2150793856.jpg?t=st=1723725933~exp=1723729533~hmac=80918bb4ad8f4e7c816c7e3380cf1695378c69fe267021ce5e4030337d85c56d&w=1060')] bg-no-repeat bg-cover bg-center min-h-screen">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Project/>
      <Contact/>
   </div>
  );
}
