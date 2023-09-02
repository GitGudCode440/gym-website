import Button from './Button'

function Contact() {
  return (
    <div className='contactUs'>
      <div>
        <h2 className="heading-2 white92" >Let's Get In Touch With You</h2>
        <p className='paragraph white80'>And get to build a happy, and healthier life with us</p>
      </div>
      <div id='content'>
        <Button text='Contact us'></Button>
        <p className='white80' style={{fontSize: '0.777rem', fontWeight: '200'}}>
          11th Street Boulevard, San Fransico, California
        </p>
      </div>
    </div>
  )
}

export default Contact