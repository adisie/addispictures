import { FaCode } from "react-icons/fa"
import {NavLink} from 'react-router-dom'

const Projects = () => {
  return (
    <div className="projects-con">
      <h3 id='projects'> <FaCode className="project-icon" />Projects</h3>
      <div className="project-list">
        <div className="project ishare">
            <h4>ISHARE</h4>
            <p>
              This project is developed for idea-sharing and/or information-sharing purpose, any one can create an account for him/her self and can manage his/her profile, plus the systme allows a user to add their own idia and share among others.
            </p>
            <div className="btn-container">
                <NavLink className='project-link'><span></span>On going</NavLink>
            </div>
        </div>
        <div className="project gabi-store">
            <h4>GABI-STORE</h4>
            <p>
              An e-commerce project, it provides ethiopian traditional clothes for customers, where any customer from anywhere can vist the store and order his/her desire
            </p>
            <button>On going</button>
        </div>
      </div>
    </div>
  )
}

export default Projects
