import React from 'react'
import image from '../assets/weightlifts_girl.jpg'

function NoPain() {
  return (

    <div className="wrapper">
      <div className="nopain">
      
          <div id='img'/>
      
          <div className="wrapper" style={{flexBasis: '50%'}}>
            <h2 className="heading-2 black">NO PAIN, NO GAIN</h2>
            <p className="black" style={{textAlign: 'center', height: 'auto'}}>
              Exercise can be difficult to master, we are like a family of athletes who are there to support you along the journey and provide you with valuable advice.
            </p>
          </div>
      </div>
    </div>
  )
}

export default NoPain