import { useEffect } from 'react'
import { useState } from 'react'
import Button from './Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


function ToTopButton() {
  let maxScrollHeight = 300
  let [showState, setShowState] = useState(false)
  

  function update_scroll_position() {
    let scrollPos = document.documentElement.scrollTop
    setShowState(scrollPos > maxScrollHeight ? true : false)
  }

  useEffect(() => {
      window.addEventListener('scroll', update_scroll_position)
      return () => window.removeEventListener('scroll', update_scroll_position)
    })


  return (
    <Button propStyle={{        
      padding: '1rem',
      display: showState ? 'block' : 'none',
      borderRadius: '8px',
      position: 'fixed',
      bottom: '16px',
      right: '16px',
      zIndex: '1'}}
      
      text={<FontAwesomeIcon
        icon={faArrowUp}
        style={{color: 'black'}}
      ></FontAwesomeIcon>}
    ></Button>
  )
}

export default ToTopButton;