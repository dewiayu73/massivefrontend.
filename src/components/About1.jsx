import React from 'react'
import IconDaun from '../assets/img/daun.png'

const About1 = () => {
  return (
    <div>
    <div className='flex justify-center pl-8'>
    <h1 className="text-4xl font-[780] mb-6 pt-20 ">All Hands On Tech</h1>
    <img src={IconDaun} alt="" />
    </div>
    <div>
      <p className='text-2xl text-center'>Transforming agriculture with smart solutions</p>
    </div>
    </div>

  )
}

export default About1