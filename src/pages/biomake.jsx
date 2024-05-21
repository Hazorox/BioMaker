import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import bio from '../assets/bio.svg'
import maillogo from '../assets/maillogo.svg'
import star from '../assets/star.svg'
import pic from '../assets/pic.svg'
import age from '../assets/age.svg'
import idCard from '../assets/idCard.svg'
import { transparent } from '../variables'
import Input from '../components/input'
const biomake = () => {
  const divStyle=transparent+" h-fit w-[500px] p-[15px] "
  return (
    <div className='min-h-screen p-15 flex justify-center items-center flex-col'>
  <Header message={"Welcome! Start BioMaking "} />
  <main className='mt-[50px] m-[20px] flex flex-col gap-14'>
  <div className={divStyle}>
    <span className='text-2xl'>Personal Info</span>
    <Input  name="Name" logo={idCard} type="text" placeholder="Your Unique Name" />
    <Input  name="Picture" logo={pic} type="file" placeholder="Your Amazing photo" />
    <Input name={"Bio"} logo={bio} type="textarea" placeholder="Write a bit about yourself! " />
    <Input name={"Email"} logo={maillogo} type="email" placeholder="Your Email"  />
    <Input name={"Age"}  logo={age} type="number" placeholder="Your Age" />
  </div>
    <div className={divStyle}>
      <span className='text-2xl my-5 flex items-center gap-4 '><img src={star} className='w-8 h-8' />Skills</span>
      <textarea placeholder='Add Your Skills'  className={' text-secondary p-[3px]   w-full h-[130px] placeholder:text-center focus:placeholder:opacity-0 placeholder-black focus:border-orange-400 ' + transparent} />
    </div>
   </main> 
        <Footer />
      
</div>
  )
}

export default biomake

