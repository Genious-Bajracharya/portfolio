import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import { useInView } from 'react-intersection-observer';

export default function Home() {

  // const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  // const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  // const { ref: projectRef, inView: projectInView } = useInView({ triggerOnce: true });
  // const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-neutral-950 scroll-snap-y scroll-snap-mandatory overflow-y-scroll h-screen">
      <section className="snap-start bg-[url('https://img.freepik.com/free-photo/3d-portrait-people_23-2150793856.jpg?t=st=1723725933~exp=1723729533~hmac=80918bb4ad8f4e7c816c7e3380cf1695378c69fe267021ce5e4030337d85c56d&w=1060')] bg-no-repeat bg-cover bg-center min-h-screen">
        <Navbar />
        <Hero />
      </section>
      
      <section className="snap-start">
        <About />
      </section>
     
      <section className="snap-start">
        <Project />
      </section>
    
      <section className="snap-start">
        <Contact />
      </section>
    </div>
  );
}

