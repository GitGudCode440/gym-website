import React from 'react'
import { useEffect } from 'react'
import Button from './Button'
import Header from './Header'

function Hero() {
  return (
    <section className='hero'>
    	<div className="hero-image"></div>
		<div className="hero-banner">
			<div className="hero-banner black-banner">
				<div style={{padding: '0 8px'}}>
					<h1 className='white92 heading-1'>BUILD<br />RAW POWER<br />WITH US</h1>
					<p className='white80' >which is over a hundred athletes; <br/> changing lives by the day</p>
				</div>
			</div>
			<Button text='Join Now'></Button>
			<div className="hero-banner price-info">
				<p className='paragraph black'>For only 4$ per day</p>
			</div>
		</div>
    </section>
  )
}

export default Hero