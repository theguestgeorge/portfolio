import './Header.css'

export default function Header() {
  return (

    <header className="site-header">
        <a className="site-brand" href="#center">
          My Portfolio
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#center">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
  )
}