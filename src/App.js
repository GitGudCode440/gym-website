import React, { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Contact from './components/Contact';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import HorizontalRule from './components/HorizontalRule';
import ALotOfEquip from './components/LotOfEquip.js'
import Menu from './components/Menu';
import NoPain from './components/NoPain';
import Programmes from './components/Programmes'
import ToTopButton from './components/ToTopButton';



function App() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu =  () => {
    setShowMenu(_prevShowMenu => (!_prevShowMenu))
  }

  useEffect(() => {
    console.log(showMenu)
  }, [showMenu])

  return (
    <div id='App'>
      <Header propClass='header' toggleMenu={toggleMenu}/>
      <Header propClass='header-hidden' />
      <Menu showMenu={showMenu}></Menu>
      <ToTopButton></ToTopButton>


      <Hero></Hero>

      <HorizontalRule></HorizontalRule>

      <ALotOfEquip></ALotOfEquip>

      <div>
        <h2 className='heading-2' style={{padding: '80px 0 16px 0'}}>Programmes</h2>
        <Programmes headingText='Pushup Practice' withText='Maria Hay' timingsText='7:00 A.M. - 8:00 A.M.'></Programmes>
        <Programmes headingText='Crutches Practice' withText='Johnny Vin Diesel' timingsText='8:00 A.M. - 9:00 A.M.'></Programmes>
      </div>

      <HorizontalRule></HorizontalRule>

      <NoPain></NoPain>

      <HorizontalRule></HorizontalRule>
      
      <Contact></Contact>
      
    </div>
    
  );
}

export default App;
