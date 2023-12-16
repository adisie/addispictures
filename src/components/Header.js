
// my image
import myProfileImage from '../assets/images/haddis_23.jpg'

const Header = () => {

  return (
    <header>
      <div className="sub-container header">
        <div className="site-logo">
          <a href='#me' className='home-link'>addisPictures</a>
        </div>
        <nav className="navigations">
          <ul>
            <li>
              <a href='#me' className='link' >Home</a>
            </li>
            <li>
              <a href='#services ' className='link' >Services</a>
            </li>
            <li>
              <a href='#projects' className='link' >Projects</a>
            </li>
            <li>
              <a className='link' href='#contacts' >Contacts</a>
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
