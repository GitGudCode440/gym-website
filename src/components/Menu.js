import React from 'react'

function Menu({showMenu}) {
  return (
    <nav className={showMenu ? `menu-show` : `menu-hide`}>
      <div className="wrapper">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Equipments</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  )
}



export default Menu;
