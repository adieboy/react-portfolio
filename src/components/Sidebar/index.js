import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faUser , faHome } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
 
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoS} alt="logo"/>
      <img className='sub-logo' src={LogoSubtitle} alt="slobodan"/>
    </Link>

    <nav>
      <NavLink exact ="true"  to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink 
        exact ="true" 
        
        className="about-link" to="/about"
        >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink 
        exact ="true" 
        
        className="contact-link" 
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
  <ul>
    <li>
      <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/adie-capilitan-b53928195/'>
        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
      </a>
    </li>
    <li>
      <a target="_blank" rel='noreferrer' href='https://github.com/adieboy/'>
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
      </a>
    </li>
    <li>
      <a target="_blank" rel='noreferrer' href='https://www.youtube.com/@AdieVentureVlog'>
        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
      </a>
    </li>
    <li>
      <a target="_blank" rel='noreferrer' href='https://www.facebook.com/adiewolf/'>
        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
      </a>
    </li>
  </ul>
  </div>

)
export default Sidebar