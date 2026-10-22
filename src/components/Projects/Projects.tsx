import './Projects.css'
import sonarRepsPreview from '../../assets/projects/sonar-reps-preview.png'

type Project = {
  name: string
  technologies: string[]
  image: string
  imageAlt: string
  bulletPoints: string[]
  githubLink: string
}

const projects: Project[] = [
  {
    name: 'Sonar Reps',
    technologies: ['Swift', 'Python'],
    image: sonarRepsPreview,
    imageAlt: 'Abstract preview graphic for Sonar Reps',
    bulletPoints: ["Completely built with: blah blah ", "Good looking UI", "Reason behind 2nd place finish at Queen Mary Univeristy hackathon"],
    githubLink: "https://github.com/theguestgeorge/sonar-reps"
  },
  {
    name: 'AntiChess solver',
    technologies: ['Swift'],
    image: sonarRepsPreview,
    imageAlt: 'Abstract preview graphic for Sonar Reps',
    bulletPoints: ["Completely built with: blah blah ", "Good looking UI", "Reason behind 2nd place finish at Queen Mary Univeristy hackathon"],
    githubLink: "https://github.com/theguestgeorge/sonar-reps"
  },
  {
    name: 'Sonar Reps',
    technologies: ['Swift'],
    image: sonarRepsPreview,
    imageAlt: 'Abstract preview graphic for Sonar Reps',
    bulletPoints: ["Completely built with: blah blah ", "Good looking UI", "Reason behind 2nd place finish at Queen Mary Univeristy hackathon"],
    githubLink: "https://github.com/theguestgeorge/sonar-reps"   
  }
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-preview">
        <img src={project.image} alt={project.imageAlt} />
      </div>
      <div className="project-details">
        <h3>{project.name}</h3>
        <p className="project-technologies">
          Technologies Used:{' '}
          {project.technologies.map((technology, index) => (
            <span key={technology}>
              <span className="project-technology">{technology}</span>
              {index < project.technologies.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
        <ul>
            {project.bulletPoints.map((bulletPoint) => (
                <li key={bulletPoint}>{bulletPoint}</li>
            ))}
        </ul>
        <a href={project.githubLink}>Repo</a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects-content">
        <p className="projects-eyebrow">A selection of my work</p>
        <h2 id="projects-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.name}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
