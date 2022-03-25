import React from 'react'

function Header({text}) {
  return (
    <div>{text}</div>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

export default Header;