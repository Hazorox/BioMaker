import React from 'react'
import notFound from './../assets/notFound.svg'
import { anchorstyle } from '../variables'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className=' h-screen flex flex-col justify-center items-center'>
        <span className="text-4xl"> Page Not Found</span>
        <img src={notFound} className='h-[500px] w-[450px]' />
        <span className='text-2xl'> Go  <Link className={anchorstyle} to={'/login'}>Login</Link></span>
    </div>
  )
}

export default NotFound