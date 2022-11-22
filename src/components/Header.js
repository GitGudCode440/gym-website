import dumbbellLogo from '../assets/dumbbell_logo.svg'
import menuIcon from '../assets/menu_icon.svg'

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <nav className="header-nav">
          <ul className='header-nav-list'>
            <li id='dumbbellLogo'>
              <a href="#">
                <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 0.132812C4.55228 0.132812 5 0.580528 5 1.13281V7.63281H27V1.13281C27 0.580528 27.4477 0.132812 28 0.132812C28.5523 0.132812 29 0.580528 29 1.13281V8.63281V16.1328C29 16.6851 28.5523 17.1328 28 17.1328C27.4477 17.1328 27 16.6851 27 16.1328V9.63281H5V16.1328C5 16.6851 4.55228 17.1328 4 17.1328C3.44772 17.1328 3 16.6851 3 16.1328V8.63281V1.13281C3 0.580528 3.44772 0.132812 4 0.132812ZM1 3.63281C1.55228 3.63281 2 4.08053 2 4.63281V12.6328C2 13.1851 1.55228 13.6328 1 13.6328C0.447715 13.6328 0 13.1851 0 12.6328V4.63281C0 4.08053 0.447715 3.63281 1 3.63281ZM32 4.63281C32 4.08053 31.5523 3.63281 31 3.63281C30.4477 3.63281 30 4.08053 30 4.63281V12.6328C30 13.1851 30.4477 13.6328 31 13.6328C31.5523 13.6328 32 13.1851 32 12.6328V4.63281Z" fill='#EBEBEB'/>
                </svg>
              </a>
            </li>
            <li id='menuIcon'>
              <a href="#">
                <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.20921 0.183594H20.8416C21.4814 0.183594 22 0.702241 22 1.34202V1.46397C22 2.10375 21.4814 2.6224 20.8416 2.6224H1.20921C0.569429 2.6224 0.0507812 2.10375 0.0507812 1.46397V1.34202C0.0507812 0.702241 0.569429 0.183594 1.20921 0.183594ZM20.8416 6.28061H1.20921C0.569429 6.28061 0.0507812 6.79926 0.0507812 7.43904V7.56098C0.0507812 8.20076 0.569429 8.71941 1.20921 8.71941H20.8416C21.4814 8.71941 22 8.20076 22 7.56098V7.43904C22 6.79926 21.4814 6.28061 20.8416 6.28061ZM20.8416 12.3776H1.20921C0.569429 12.3776 0.0507812 12.8963 0.0507812 13.5361V13.658C0.0507812 14.2978 0.569429 14.8164 1.20921 14.8164H20.8416C21.4814 14.8164 22 14.2978 22 13.658V13.5361C22 12.8963 21.4814 12.3776 20.8416 12.3776Z" fill="#CDCDCD"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header