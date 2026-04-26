'use client'

import { ProjectCard } from './project-card'

const projects = [
  {
    name: 'Forge & Fade',
    type: 'Barber',
    location: 'Hitchin',
    image: '/images/forge-fade.jpg',
    url: 'https://barbershoppromoforgeandfade.netlify.app/',
  },
  {
    name: 'The Willow Kitchen',
    type: 'Cafe',
    location: 'Letchworth',
    image: '/images/willow-kitchen.jpg',
    url: 'https://thewillowkitchen.netlify.app/',
  },
  {
    name: 'Swift Drainage & Plumbing',
    type: 'Plumber',
    location: 'Biggleswade',
    image: '/images/swift-drainage.jpg',
    url: 'https://swiftdrainangeandplumbing.netlify.app/',
  },
  {
    name: 'Elevate PT',
    type: 'Personal Trainer',
    location: 'Stevenage',
    image: '/images/elevate-pt.jpg',
    url: 'https://elevate-pt.netlify.app/',
  },
  {
    name: 'Bramble & Bloom',
    type: 'Florist',
    location: 'Baldock',
    image: '/images/bramble-bloom.jpg',
    url: 'https://brambleandbloom.netlify.app/',
  },
]

export function ProjectGrid() {
  const topRow = projects.slice(0, 3)
  const bottomRow = projects.slice(3, 5)

  return (
    <div className="flex flex-col gap-6">
      {/* Top row - 3 cards side by side */}
      <div className="grid grid-cols-3 gap-6">
        {topRow.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            type={project.type}
            location={project.location}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
      {/* Bottom row - 2 cards centered beneath gaps */}
      <div className="grid grid-cols-6 gap-6">
        <div className="col-start-2 col-span-2">
          <ProjectCard
            name={bottomRow[0].name}
            type={bottomRow[0].type}
            location={bottomRow[0].location}
            image={bottomRow[0].image}
            url={bottomRow[0].url}
          />
        </div>
        <div className="col-span-2">
          <ProjectCard
            name={bottomRow[1].name}
            type={bottomRow[1].type}
            location={bottomRow[1].location}
            image={bottomRow[1].image}
            url={bottomRow[1].url}
          />
        </div>
      </div>
    </div>
  )
}
