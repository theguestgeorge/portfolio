import '../Skills/Skills.css'
import awsMlEngineerAssociate from '../../assets/certifications/aws-ml-engineer-associate.png'
import githubFoundations from '../../assets/certifications/github-foundations.png'
import ibmCertificate from '../../assets/certifications/ibm-certificate.png'
import bloombergMarketConcepts from '../../assets/certifications/bloomberg-market-concepts.png'
import ciscoCertificate from '../../assets/certifications/cisco-certificate.png'

const certifications = [
    { name: 'AWS Certified Machine Learning Engineer – Associate', image: awsMlEngineerAssociate },
    { name: 'GitHub Foundations Certificate', image: githubFoundations },
    { name: 'IBM Certificate', image: ibmCertificate },
    { name: 'Bloomberg Market Concepts Certificate', image: bloombergMarketConcepts },
    { name: 'Cisco Certificate', image: ciscoCertificate }
];

export default function Certifications() {
  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <div className="skills-container">
        <div className="skills-header">
          <p className="skills-eyebrow">My certifications</p>
          <h2 id="skills-title">Certifications</h2>
        </div>
        <ul className="skills-grid">
          {certifications.map((certification) => (
            <li key={certification.name}>
              <div className="itemContainer">
                <img src={certification.image} alt="" />
                <p>{certification.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}