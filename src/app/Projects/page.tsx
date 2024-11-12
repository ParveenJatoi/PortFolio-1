// src/app/projects/page.tsx

import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Digital Clock',
    description: 'Digital clock created with Html,Css and Javascript',
    imgSrc: '/digClock.jpeg', // Replace with your image paths
    githubLink: 'https://github.com/yourusername/project-one',
  },
  {
    id: 2,
    title: 'Calculator',
    description: 'Calculator created with Html,Css and Javascript',
    imgSrc: '/calculator2.jpeg',
    githubLink: 'https://github.com/yourusername/project-two',
  },
  // Add more projects as needed
  {
    id: 3,
    title: 'Anolog Clock',
    description: 'Analog Clock created with Html,Css and Javascript',
    imgSrc: '/clock.jpeg',
    githubLink: 'https://github.com/yourusername/project-three',
  },
  {
    id: 4,
    title: 'Diamond Jewellary',
    description: 'Diamond Jewellary website created with nextjs and tailwind',
    imgSrc: '/diamond.jpeg',
    githubLink: 'https://github.com/yourusername/project-four',
  },
  {
    id: 5,
    title: 'Fast Food ',
    description: 'Fast Food webpage created with Html,Css and Javascript',
    imgSrc: '/fastfood.jpeg',
    githubLink: 'https://github.com/yourusername/project-five',
  },
  {
    id: 6,
    title: 'Perfumes',
    description: 'Perfume Website created with Nextjs and tailwind',
    imgSrc: '/perfumes.jpeg',
    githubLink: 'https://github.com/yourusername/project-six',
  },
  {
    id: 7,
    title: 'Portfolio',
    description: 'My portfolio webpage created with Nextjs and Css',
    imgSrc: '/image.jpeg',
    githubLink: 'https://github.com/yourusername/project-seven',
  },
  {
    id: 8,
    title: 'Facebook Login Page',
    description: 'Facebook Login Page creted ith Html and Css',
    imgSrc: '/facebook.jpeg',
    githubLink: 'https://github.com/yourusername/project-eight',
  },
  {
    id: 9,
    title: 'Calender',
    description: 'A Cmd based Calnder created with Python',
    imgSrc: '/Calender.jpeg',
    githubLink: 'https://github.com/yourusername/project-nine',
  },
    {id: 10,
    title: ' Figma Design ',
    description: 'A tourist webpage created according figma design',
    imgSrc: '/figma.jpeg',
    githubLink: 'https://github.com/yourusername/project-ten',
  },
  {id: 11,
    title: ' Light On/Off ',
    description: 'On and Off light on Click with Javascript',
    imgSrc: '/bulb.jpeg',
    githubLink: 'https://github.com/yourusername/project-ten',
  },
  {id: 12,
    title: ' Number Guessing Game ',
    description: 'Created with JavaScript',
    imgSrc: '/numberguess.jpeg',
    githubLink: 'https://github.com/yourusername/project-ten',
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <Image 
              src={project.imgSrc} 
              alt={project.title} 
              className="project-image" 
              width={300} 
              height={200} 
            />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="view-details">
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}