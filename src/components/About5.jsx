import React from 'react'
import Surgiwe from '../assets/img/surgiwe3.png'
import Fernandi from '../assets/img/fernanda3.png'
import Viriya from '../assets/img/viriya3.png'
import Stefan from '../assets/img/stefan3.png'
import Yudhis from '../assets/img/yudhis3.png'
import Kevin from '../assets/img/kevin3.png'


function About6() {
  return (
    <div className="text-center mb-8 pt-8">
        <p className="text-xl font-bold mt-2 pt-4">ARTIFICIAL INTELLEGENT</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pt-20">

        <div className="flex flex-col items-center text-center space-y-4">
        <div className='h-56 w-56 rounded-full'>
        <img src={Surgiwe} alt="" />
        </div>
        <p className='leading-8'>Surgiwe <br />Design Researcher </p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-4">
        <div className='h-56 w-56 rounded-full'>
        <img src={Fernandi} alt="" />
        </div>
        <p className='leading-8'>Fernandi Lucky Putra <br /> Data Engineer </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
        <div className='h-56 w-56 rounded-full'>
        <img src={Viriya} alt="" />
        </div>
        <p className='leading-8'>Viriya Marhan Cunis<br /> Machine Learning Engineer </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
        <div className='h-56 w-56 rounded-full'>
        <img src={Stefan} alt="" />
        </div>
        <p className='leading-8'>Stefan Yeo <br />Machine Learning Engineer </p>
        </div>
     
    </div> 

        <div className='grid grid-cols-2 py-20 px-80 ml-4'>

        <div className="flex flex-col items-center text-center space-y-4">
        <div className='h-56 w-56 rounded-full'>
        <img src={Yudhis} alt="" />
        </div>
        <p className='leading-8'>Yudhistira Andilie<br /> Machine Learning Ops  </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
        <div className='h-56 w-56 rounded-full'>
        <img src={Kevin} alt="" />
        </div>
        <p className='leading-8'>Kevin Chandra Wijaya <br />Machine Learning Ops </p>
        </div>
   
        </div> 

  </div>
    
  )
}

export default About6