
// my image
import myProfileImage from '../assets/images/haddis_23.jpg'

const Header = () => {

  return (
    <header>
      <div className="sub-container header">
        <div className="site-logo">
          <a  className='home-link'>addisPictures</a>
        </div>
        <nav className="navigations">
          <ul>
            <li>
              <a  className='link' >Home</a>
            </li>
            <li>
              <a  className='link' >Skills</a>
            </li>
            <li>
              <a className='link' >Projects</a>
            </li>
            <li>
              <a  className='link' >Contact</a>
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
