import dumbbellLogo from '../assets/dumbbell_logo.svg'
import menuIcon from '../assets/menu_icon.svg'

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#">
          <img src={dumbbellLogo} alt="A logo of a dumbbell" />
        </a>
        <a href="#">
          <img src={menuIcon} alt="The menu icon" />
        </a>
      </nav>
    </header>
  )
}

export default Header