import React from 'react'

const Header = ({condition}) => {
  return (<>
  <header className="top-10 fixed">
        <p className="text-2xl md:text-4xl  ">{condition=="login"?"Login":"Signup"} to start BioMaking</p>
      </header></>
  )
}

export default Header