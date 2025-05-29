import { About } from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Experience from "./Components/Experience/Experience"
import Footer from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header"
import { Hero } from "./Components/Hero/Hero"
import Project from "./Components/Project/Project"

function App() {

  const toogleDark = ()=>{
    document.getElementById('rootElement').classList.toggle('dark');
  }

  return (
    <div id="rootElement">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
