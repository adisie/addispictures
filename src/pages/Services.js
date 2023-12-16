
import { FaRegHandshake } from "react-icons/fa"
import { FaDesktop } from "react-icons/fa"
import { SiServerless } from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import { IoSchoolSharp } from "react-icons/io5"

const Services = () => {
  return (
    <div className='services-con'>
        <h3><FaRegHandshake className="service-icon" id="services"/>Services</h3>
        <div className="service-list">
            <div className="service">
                <h4>Frontend Development</h4>
                <FaDesktop className="icon"/>
                <p>
                    responsive web design using REACT JS, CSS and SCSS
                </p>
            </div>

            <div className="service">
                <h4>Backend Development</h4>
                <SiServerless className="icon"/>
                <p>
                    rest-api developemnt using NODE JS/EXPRESS JS  
                </p>
            </div>
            
            <div className="service">
                <h4>Database Management</h4>
                <FaDatabase className="icon"/>
                <p>
                    Excellent experience in  MYSQL and MONGODB BATABASE stystems
                </p>
            </div>
            
            <div className="service">
                <h4>Tutoring</h4>
                <IoSchoolSharp className="icon"/>
                <p>
                    skill share through tutoring and willingness to learn from it 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services
