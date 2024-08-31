'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { UilArrowRight } from '@iconscout/react-unicons';
import Link from 'next/link';

export default function Projects() {
  const router = useRouter();

  const projects = [
    {
      title: 'Organic Healthcare',
      description: 'A fullstack E-commerce application for Organic Products',
      imageSrc: '/organic1.png',
      link: '/projects/organichealthcare',
    },
    {
      title: 'Fake Store',
      description: 'An e-commerce app made using Fake Store API',
      imageSrc: '/fakestore.jpeg',
      link: '/projects/fakestore',
    },
    {
      title: 'Fitness APP',
      description: 'A simple  platform for recording your fitness journey',
      imageSrc: '/fitness2.png',
      link: '/projects/fitnessapp',
    },
  ];

  return (
    <div className="p-4 lg:px-20 lg:py-18" id="projects">
      <h1 className="text-4xl font-bold mb-8 text-white">My Projects</h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => router.push(project.link)}
            className="group relative rounded-xl cursor-pointer overflow-hidden lg:flex-1 shadow-lg shadow-black hover:shadow-gray-600"
          >
            <div className="relative h-96 lg:h-[450px] w-full">
              <Image
                className="rounded-lg"
                src={project.imageSrc}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 text-white text-center p-4 rounded-b-lg opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center">
                <div>
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="mt-2">{project.description}</p>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 mx-auto text-black hover:bg-transparent hover:text-gray-200"
                >
                  See More <UilArrowRight />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href={'/allprojects'}>
          <button className="p-2 bg-transparent text-gray-200 border border-cyan-400 rounded-sm w-32 hover:bg-cyan-400 transition-colors ease-in-out duration-200">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
}


