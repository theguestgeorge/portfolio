import './About.css'
import cvFile from '../../assets/cv/George_Ernest_Guest_CV.pdf'

export default function About() {
  return (
    <section className="about-me" aria-labelledby="about-title">
      <div className="about-content">
        <p className="about-eyebrow">A little about me</p>
        <h2 id="about-title">Computer Science student, curious problem-solver.</h2>
        <p className="about-description">
          I’m studying for a BSc in Computer Science with AI at{" "}
          <a href="https://www.qmul.ac.uk/">Queen Mary University of London</a>.
          I’ve completed my first year with a first and am continuing to learn
          full-stack development. I enjoy solving problems through code and
          look forward to learning alongside other programmers.
        </p>
        <a
          className="cv-download"
          href={cvFile}
          download="George_Ernest_Guest_CV.pdf"
          aria-label="Download my CV as a PDF"
        >
          Download my CV
        </a>
      </div>
    </section>
  )
}