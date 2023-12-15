

// skills
import Spinner from "./sub-pages/skills/Spinner"
import FormValidation from "./sub-pages/skills/FormValidation"
import ThemeSwitcher from "./sub-pages/skills/ThemeSwitcher"

const Skills = () => {
    return ( 
        <div className="skills-con">
            <h3 id='skills'>some showcases</h3>
            <p className="skill-intro">
                Web developemnt is my passion, designing web stuffs using web-dev thechnology HTML, CSS, SCSS and JS is really fun, some of the funny things . . . 
            </p>
            <div className="skill-list">
                <Spinner />
                <FormValidation />
                <ThemeSwitcher />
            </div>
        </div>
     );
}
 
export default Skills;