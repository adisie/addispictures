import {NavLink} from 'react-router-dom'
// my image
import myProfileImage from '../assets/images/haddis_23.jpg'

const Header = () => {
  // active link style
  const activeLinkStyle = ({isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "normal"
    }
  }
  return (
    <header>
      <div className="sub-container header">
        <div className="site-logo">
          <NavLink to='/' className='home-link'>addisPictures</NavLink>
        </div>
        <nav className="navigations">
          <ul>
            <li>
              <NavLink to='/' className='link' >Home</NavLink>
            </li>
            <li>
              <NavLink className='link' >Skills</NavLink>
            </li>
            <li>
              <NavLink className='link' >Projects</NavLink>
            </li>
            <li>
              <NavLink className='link' to='/#contacts' >Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="user-container">
          <span className='username-spane'><span className='first-name'>Addis</span> <span className='last-name'>Fanta</span></span>
          <img src={myProfileImage} alt="my-profile" className='profile-img'/>
        </div>
      </div>
    </header>
  )
}

export default Header
