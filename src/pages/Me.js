
import Typed from 'react-typed'
import {NavLink} from 'react-router-dom'
import { FaFilePdf } from "react-icons/fa"

import CV from '../assets/pdfs/my-cv.pdf'

const Me = () => {
    return ( 
        <div className='me-con'  id="me">
            <div className="me-text">
                <span className='introduction'>Hi, my name is</span>
                <h3 className='my-name'>Addis Fenta</h3>
                <h4>I'm a <span className='animated-text'> 
                    <Typed 
                    strings={["Develeoper","ደቨሎፐር","Freelancer","ፍሪላንሰር","Designer","ዲዛይነር"]} 
                    typeSpeed={150} 
                    backSpeed={100}
                    loop
                    />
                    </span>
                </h4>
                <p>
                    A passionated <span className='mern'>mern</span> stack developer, graduated in <span className='software'>software engineering</span> and specialized in web-design and implementation, with excellent expreience in responsive web and rest-api development. 
                </p>
                <div className="link-controllers">
                    <NavLink className='cv-link' to={CV} download='addis-cv' target='_blank'><FaFilePdf className='icon'/><span></span>download cv</NavLink>
                    <NavLink to='mailto:adisiefenta23@gmail.com' className='cv-link'><span></span>talk me</NavLink>
                </div>
            </div>
            <div className="me-img">
                
            </div>
        </div>
     );
}
 
export default Me;