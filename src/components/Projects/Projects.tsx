import './Projects.css'
import sonarRepsPreview from '../../assets/projects/sonar-reps-preview.png'
import antichessPreview from '../../assets/projects/antichess-preview.png'
import asciiWebcamPreview from '../../assets/projects/ascii-webcam-preview.png'

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
    technologies: ['Swift', 'SwiftUI', 'Python', 'NumPy', 'SciPy'],
    image: sonarRepsPreview,
    imageAlt: 'Sonar Reps app screens showing a counted rep, a refused half rep and a phone-moved warning',
    bulletPoints: [
      'Counts push-ups using the iPhone speaker and mic as sonar, with no camera',
      'Trained rep judge counted 39 of 40 full push-ups and refused all 15 half reps',
      'Placed 2nd at the QMUL AI Hackathon',
    ],
    githubLink: 'https://github.com/theguestgeorge/sonar-reps',
  },
  {
    name: 'AntiChess Solver',
    technologies: ['Python', 'python-chess', 'HTML', 'CSS', 'JavaScript'],
    image: antichessPreview,
    imageAlt: 'Anti-chess board in the browser interface, a few moves into a game',
    bulletPoints: [
      'Plays anti-chess, where captures are forced and losing every piece wins',
      'Engine uses alpha-beta search with iterative deepening and move ordering',
      'Browser interface with time controls and online play against friends',
    ],
    githubLink: 'https://github.com/theguestgeorge/anitchess-solver',
  },
  {
    name: 'ASCII Webcam',
    technologies: ['Python', 'OpenCV'],
    image: asciiWebcamPreview,
    imageAlt: 'Live webcam feed rendered as ASCII characters in the terminal',
    bulletPoints: [
      'Streams your webcam into the terminal as live ASCII art',
      'Maps brightness to characters and colour to 24-bit ANSI codes',
      'Scales to the terminal width at a capped frame rate',
    ],
    githubLink: 'https://github.com/theguestgeorge/ASCIIWebcam',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-preview">
        <img src={project.image} alt={project.imageAlt} />
      </div>
      <div className="project-details">
        <h3>{project.name}</h3>
        <ul
          className="project-technologies"
          aria-label={`Technologies used in ${project.name}`}
        >
          {project.technologies.map((technology) => (
            <li key={technology} className="project-technology">
              {technology}
            </li>
          ))}
        </ul>
        <ul className="project-points">
          {project.bulletPoints.map((bulletPoint) => (
            <li key={bulletPoint}>{bulletPoint}</li>
          ))}
        </ul>
        <a
          className="project-link"
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
        >
          View on GitHub
        </a>
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
