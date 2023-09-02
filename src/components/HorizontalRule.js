function HorizontalRule({margin}) {
  return (
    <div className="wrapper">
      <hr style={{margin: `${margin} 0`}}/>
    </div>
  )
}

HorizontalRule.defaultProps = {
  margin: '32px'
}

export default HorizontalRule