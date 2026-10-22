
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Skills from "./components/Skills/Skills.tsx";
import About from "./components/About/About.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Footer from "./components/Footer/Footer.tsx";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {

  return (
    <>
      <Header />
      
      <section id="hero">
        <Hero />
      </section>

      <body>
        <section id="about">
          <About />
        </section>
        <section id = "skills">
          <Skills />
        </section>
        <Projects />
        <a href="https://arupmandal.github.io/">inspiration</a>
      </body>


      
      

      <div className="ticks"></div>
      <section id="spacer"></section>
      <Footer />
    </>
  );
}

export default App;
