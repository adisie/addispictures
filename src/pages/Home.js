
// pages
import Me from "./Me"
import Services from "./Services"
import Skills from "./Skills"
import Projects from "./Projects"
import Contacts from "./Contacts"

const Home = () => {
  return (
    <div className="home-container">
      <div className="sub-container home-con">
        <Me id='me'/>
        <Services id='contacts'/>
        <Skills id='skills'/>
        <Projects id='projects'/>
        <Contacts id='contacts'/>
      </div>
    </div>
  )
}

export default Home
