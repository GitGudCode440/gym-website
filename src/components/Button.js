function Button({text, title, propStyle, onClick }) {
  return (
    <button
      title={`${title}-btn`}
      style={propStyle}
      className='btn-main'
      onClick={onClick}
    >
      <a href='#' style={{
        color: 'var(--black10)',
        textDecoration: 'none'
        }}>{text}</a>
    </button>
  )
}

Button.defaultProps = {
  title: 'normal',
  propStyle: {}
}

export default Button