import React from 'react'
import Hakim from '../assets/img/hakim3.png'
import Arif from '../assets/img/arif4.png'
import Farah from '../assets/img/farah3.png'
import Dewi from '../assets/img/dewi4.png'


function About6() {
  return (
    <div className="text-center mb-8 pt-8">
        <h1 className="text-4xl font-bold">Mengenal Tim Kami</h1>
        <p className="text-xl font-bold mt-2 pt-16">WEB DEVELOPER</p>
    

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pt-20">

        <div className="flex flex-col items-center text-center space-y-4">
        <div className='h-56 w-56 rounded-full'>
        <img src={Hakim} alt="" />
        </div>
        <p className='leading-8'>Arief Rachman Hakim <br />Project Manager</p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-4">
        <div className='h-56 w-56 rounded-full'>
        <img src={Arif} alt="" />
        </div>
        <p className='leading-8'>Arif Hidayat <br /> UI/UX Designer</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
        <div className='h-56 w-56 rounded-full'>
        <img src={Farah} alt="" />
        </div>
        <p className='leading-8'>Farah Adilah Hasan <br /> UI/UX Designer</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
        <div className='h-56 w-56 rounded-full'>
        <img src={Dewi} alt="" />
        </div>
        <p className='leading-8'>Dewi Ayu Nur Maesih <br /> Full Stack Developer</p>
        </div>


    </div>

    </div>
  )
}

export default About6