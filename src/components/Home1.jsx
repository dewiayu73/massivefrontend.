import React from 'react'
import { Link } from "react-router-dom"


const HomeHero = () => {
  return (
    <div className="bg-[url('/src/assets/img/BGHOME1.png')] bg-contain h-screen bg-no-repeat">
    <div className="homepage pb-10">
    <div className="container mx-auto px-20 pr-0">
      <div className="hero grid grid-cols-2 items-center gap-20 pt-28">
        <div className="box">
        <h1 className="text-5xl/tight font-bold mb-6" >Perawatan Tepat Waktu Dimulai Dari Sini</h1>
        <p className="text-xl mb-7 leading-8">Unggah foto daun anggur Anda dan dapatkan diagnosis <br /> 
        akurat serta panduan perawatan terbaik hanya dalam <br /> hitungan detik.</p>
        <div>
        <Link to="/Home4">
        <button className="bg-[#618264] text-white py-4 px-8 rounded-2xl font-bold">Get Started</button>
        </Link>
        </div>
       </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default HomeHero