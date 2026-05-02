import { client } from '@/lib/sanity'
import { ProjectCard } from './project-card'

async function getProjects() {
  const projects = await client.fetch(`*[_type == "project"]{
    title,
    projectType,
    location,
    liveUrl,
    "image": image.asset->url
  }`)
  return projects
}

export async function ProjectGrid() {
  const projects = await getProjects()

  const topRow = projects.slice(0, 3)
  const bottomRow = projects.slice(3, 5)

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-6">
        {topRow.map((project: any) => (
          <ProjectCard
            key={project.title}
            name={project.title}
            type={project.projectType}
            location={project.location}
            image={project.image}
            url={project.liveUrl}
          />
        ))}
      </div>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-start-2 col-span-2">
          <ProjectCard
            name={bottomRow[0].title}
            type={bottomRow[0].projectType}
            location={bottomRow[0].location}
            image={bottomRow[0].image}
            url={bottomRow[0].liveUrl}
          />
        </div>
        <div className="col-span-2">
          <ProjectCard
            name={bottomRow[1].title}
            type={bottomRow[1].projectType}
            location={bottomRow[1].location}
            image={bottomRow[1].image}
            url={bottomRow[1].liveUrl}
          />
        </div>
      </div>
    </div>
  )
}