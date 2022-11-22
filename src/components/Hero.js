import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <section className='hero'>
      <div className="hero-image"></div>
			<div className="hero-banner">
				<div className="hero-banner black-banner">
					<div className="wrapper">
						<h1 style={{fontSize: '2.369rem'}}>BUILD<br />RAW POWER<br />WITH US</h1>
						<p>which is over a hundred athletes; <br /> changing lives by the day</p>
					</div>
				</div>
				<Button text='Join Now' style={
					{
						minHeight: '10%'
					}
				}></Button>
				<div className="hero-banner price-info">
					<p>For only 4$ per day</p>
				</div>
			</div>
    </section>
  )
}

export default Hero