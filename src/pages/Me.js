
import Typed from 'react-typed'
import {NavLink} from 'react-router-dom'
import { FaFilePdf } from "react-icons/fa"

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
                    A passionated <span className='mern'>mern</span> stack developer, graduated in <span className='software'>software engineering</span> and specialized in web-desinge and implementation, with excellent expreience in responsive web and rest-api developemnt. 
                </p>
                <div className="link-controllers">
                    <NavLink className='cv-link'><FaFilePdf className='icon'/><span></span>my cv</NavLink>
                    <NavLink className='cv-link'><span></span>talk me</NavLink>
                </div>
            </div>
            <div className="me-img">
                
            </div>
        </div>
     );
}
 
export default Me;