import Image from "next/image"
import { Button } from '@/components/ui/button';
import { UilArrowRight } from '@iconscout/react-unicons';
import Link from 'next/link';


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
      imageSrc: '/fitness1.png',
      link: '/projects/fitnessapp',
    },
    {
        title: 'Weather APP',
        description: 'A weather app made using  React and weather API',
        imageSrc: '/weather1.png',
        link: '/projects/weatherapp',
      },
      {
        title: 'Taskmanager APP',
        description: 'A simple app that allows user to manage their task and set priority level',
        imageSrc: '/task1.png',
        link: '/projects/taskmanager',
      },
      {
        title: 'Blogs APP',
        description: 'A very simple app that allows user to write and view blogs',
        imageSrc: '/blog2.jpeg',
        link: '/projects/blogsapp',
      },
  ];

export default function AllProjects(){
    return (
        <div className="bg-neutral-950 p-4 lg:px-20 lg:py-18 min-h-screen">
          <h1 className="text-white text-3xl mb-8">All Projects</h1>
          <div>
            <div className="grid gap-8 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Link href={project.link} key={index}>
                  <div className="group relative rounded-xl cursor-pointer overflow-hidden shadow-sm hover:shadow-gray-600">
                    <div className="relative h-64 lg:h-96 w-full">
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
                        <Button variant={'outline'} className="mt-4 mx-auto text-black hover:bg-transparent hover:text-gray-200">
                          See More
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    };
    