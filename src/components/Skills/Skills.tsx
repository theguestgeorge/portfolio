import './Skills.css'
import html from '../../assets/skills/HTML.png'
import javaScript from '../../assets/skills/javascript.png'
import react from '../../assets/skills/react.png'
import python from '../../assets/skills/python.png'
import css from '../../assets/skills/css.png'
import git from '../../assets/skills/git.png'
import java from '../../assets/skills/java.png'
import mysql from '../../assets/skills/mysql.png'
import node from '../../assets/skills/node.png'
import numpy from '../../assets/skills/numpy.png'
import php from '../../assets/skills/php.png'
import typescript from '../../assets/skills/typescript.png'

const skills = [
    { name: 'Python', image: python },
    { name: 'HTML', image: html },
    { name: 'Java', image: java },
    { name: 'CSS', image: css },
    { name: 'JavaScript', image: javaScript },
    { name: 'React', image: react },
    { name: 'git', image: git },
    { name: 'MySQL', image: mysql },
    { name: 'Node.js', image: node },
    { name: 'NumPy', image: numpy },
    { name: 'PHP', image: php },
    { name: 'TypeScript', image: typescript }
];

export default function Skills() {
  return (

    <section className="skills-container">
        <div className="skills-header">
          <h2>About Me</h2>
        </div>
        <ul className="skills-grid">
            {skills.map((skill) => (
                <li key={skill.name}>
                    <div className="itemContainer">
                        <img src={skill.image} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                </li>
            ))}
        </ul>
      </section>
  )
}