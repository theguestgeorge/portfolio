
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
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



      
      

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
