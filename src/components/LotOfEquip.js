function LotOfEquip() {
    return (
        <section id="a-lot-of-equipment">
            <div className="wrapper">
                <hr style={{ margin: '16px 0px' }} />
            </div>
            <div id="leg-press-lady" style={{
              backgroundImage: `url('${require('../assets/leg_press_lady_mobile.jpg')}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: window.innerWidth
            }}>
            	<div className="wrapper">
              	<h2 className='heading-2'>WITH OVER 50 SPECIALIZED EQUIPMENTS</h2>
                <p className='content'>With us, we have equipment ranging from treadmills to leg pressers.<br />Due to so much equipment, we are happy to guide you on how to use them :D.</p>
            	</div>
            </div>
        </section>
    )
}

export default LotOfEquip