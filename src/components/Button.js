import React from 'react'

function Button({text, title, style }) {
  

  return (
    <button
      title={`${title}-btn`}
      style={{
        backgroundColor: 'var(--limeGreen)',
        fontSize: '1.125rem',
        border: '0px',
        padding: '16px 32px',
        cursor : 'pointer',
        ...style,
        
      }}
      
      onClick={() => console.log("Lol!")}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  title: 'normal'
}

export default Button