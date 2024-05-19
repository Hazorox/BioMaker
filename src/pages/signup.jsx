import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Inputs from '../components/Inputs'

const Signup = () => {
  return (
    <div className="flex flex-col gap-20 h-screen items-center justify-center">
      <Header condition="signup" />
      <Inputs newUser={true} />
      <Footer />
    </div>
  )
}

export default Signup