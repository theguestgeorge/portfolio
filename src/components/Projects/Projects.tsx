import './Projects.css'
import sonarRepsPreview from '../../assets/projects/sonar-reps-preview.svg'

type Project = {
  name: string
  technologies: string
  image: string
  imageAlt: string
  bulletPoints: string[]
}

const projects: Project[] = [
  {
    name: 'Sonar Reps',
    technologies: 'Project details and links will be added soon.',
    image: sonarRepsPreview,
    imageAlt: 'Abstract preview graphic for Sonar Reps',
    bulletPoints: ["Completely built with: blah blah ", "Good looking UI", "Reason behind 2nd place finish at Queen Mary Univeristy hackathon"]
  },
  {
    name: 'AntiChess solver',
    technologies: 'Project details and links will be added soon.',
    image: sonarRepsPreview,
    imageAlt: 'Abstract preview graphic for Sonar Reps',
    bulletPoints: ["Completely built with: blah blah ", "Good looking UI", "Reason behind 2nd place finish at Queen Mary Univeristy hackathon"]
  },
  {
    name: 'Sonar Reps',
    technologies: 'Project details and links will be added soon.',
    image: sonarRepsPreview,
    imageAlt: 'Abstract preview graphic for Sonar Reps',
    bulletPoints: ["Completely built with: blah blah ", "Good looking UI", "Reason behind 2nd place finish at Queen Mary Univeristy hackathon"]    
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
        <div className="project-technologies"> 
            <p></p>Technologies Used: {project.technologies}</div>
        <ul>
            {project.bulletPoints.map((bulletPoint) => (
                <li key={bulletPoint}>{bulletPoint}</li>
            ))}
        </ul>
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
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
