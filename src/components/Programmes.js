import React from 'react'
import Button from './Button'

function Programmes({headingText, withText, timingsText}) {
  return (
		<section style={{width: '100%'}} className='programmes'>
			<div id='content'>
				<div>
					<h2 className="heading-2 black">
						{headingText}
					</h2>
					<p>{`With ${withText}`}</p>
				</div>
				<div>
					<p style={{padding: '8px 0'}}>{`Timings: ${timingsText}`}</p>
					<Button propStyle={{width: '100%'}} text="Enroll now"></Button>
				</div>

			</div>
		</section>
  )
}

Programmes.defaultProps = {
	headingText: 'Heading Text Goes Here',
	withText: "Person Goes Here",
	timingsText: "12:00 A.M. - 12:00 P.M."
}

export default Programmes