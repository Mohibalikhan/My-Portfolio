import React from 'react'
import Heading from './Heading';
import Card from './Card';
import { title } from 'process';

const data = [
    {
        id: 0,
        title: "Resume Builder App",
        desc: "Typescript based interactive resume built with Html and Css",
        img: "/project01.png",
        tags: ["HTML", "Node","CSS","TypeScript"]
    },
    {
        id: 2,
        title: "Zakat Calculator",
        desc: "Calculate Zakat accurate and fast",
        img: "/project02.png",
        tags: ["HTML", "CSS","TypeScript","JavaScript"]
    },
    {
        id: 3,
        title: "Todo-list",
        desc: "Create a list of task",
        img: "/project03.png",
        tags: ["HTML", "CSS","TypeScript","Nextjs"]
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title ='My Projects' />
      <div className=' grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center' >
      {data.map((el)=>(<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />))}
       </div>
    </div>
  )
}

export default Projects
