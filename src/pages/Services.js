
import { FaRegHandshake } from "react-icons/fa"
import { FaDesktop } from "react-icons/fa"
import { SiServerless } from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import { IoSchoolSharp } from "react-icons/io5"

const Services = () => {
  return (
    <div className='services-con'>
        <h3><FaRegHandshake className="service-icon"/>Services</h3>
        <div className="service-list">
            <div className="service">
                <h4>Frontend Development</h4>
                <FaDesktop className="icon"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem totam nulla vitae, numquam dolore quaerat praesentium! Consequuntur iste nisi quod nemo, 
                </p>
            </div>

            <div className="service">
                <h4>Backend Development</h4>
                <SiServerless className="icon"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem totam nulla vitae, numquam dolore quaerat praesentium! Consequuntur iste nisi quod nemo, 
                </p>
            </div>
            
            <div className="service">
                <h4>Database Management</h4>
                <FaDatabase className="icon"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem totam nulla vitae, numquam dolore quaerat praesentium! Consequuntur iste nisi quod nemo, 
                </p>
            </div>
            
            <div className="service">
                <h4>Tutoring</h4>
                <IoSchoolSharp className="icon"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem totam nulla vitae, numquam dolore quaerat praesentium! Consequuntur iste nisi quod nemo, 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Services
