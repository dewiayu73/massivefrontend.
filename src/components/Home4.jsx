import React from 'react'
import Icon11 from "../assets/img/icon11.png"
import Icon22 from "../assets/img/icon22.png"
import Icon3 from "../assets/img/icon3.png"
import { Link } from "react-router-dom"


const Home4 = () => {
  return (
    
    <div className="services pt-28">
    <h1 className="text-3xl font-bold mb-6 text-center">Kami Membantu Merawat Tanaman Anda</h1>
    <p className=" text-xl text-center tracking-wide leading-10">Mendukung kesehatan tanaman dengan solusi diagnostik cerdas yang <br /> cepat dan akurat. Temukan cara perawatan terbaik untuk tanaman Anda.</p>
    <div className="services-box pt-16 px-16 pb-32 grid grid-cols-3 gap-24">
      <div className="box bg-[#618264] text-white text-center p-6 drop-shadow-2xl justify-center">
        <div className='justify-items-center'>
        <img src={Icon11} alt="icon11" />
        </div>
        <h3 className='text-center py-4 font-bold text-2xl' >Disease Diagnosis</h3>
        <p className='text-center pt-6 px-0 leading-10 text-xl'>Deteksi dini penyakit membantu Anda mencegah penyebaran lebih lanjut 
         dan mengoptimalkan kesehatan tanaman Anda.</p>
      </div>
      <div className="box bg-[#618264] text-white p-6 drop-shadow-2xl ">
        <div className='justify-items-center'>
      <img src={Icon22} alt="icon22" />
      </div>
        <h3 className='text-center py-4 font-bold text-2xl'>Specialized Disease Treatment </h3>
        <p className='text-center leading-10 text-xl'>Dengan perawatan tepat, Anda dapat mempercepat pemulihan tanaman dan menjaga kualitas hasil panen.</p>
      </div>
      <div className="box bg-[#618264] text-white p-6 drop-shadow-2xl ">
        <div className='justify-items-center'>
      <img src={Icon3} alt="icon3" />
      </div>
        <h3 className='text-center py-4 font-bold text-2xl'>Article</h3>
        <p className='text-center pt-6 leading-10 text-xl'>Membantu Anda menjadi lebih proaktif dalam menjaga tanaman tetap sehat melalui peningkatan pengetahuan seputar tanaman</p>
      </div>
      </div>


      <div className="pl-16 pt-0 pb-20">
         <h1 className="text-3xl font-bold mb-6 text-left pb-8 leading-10">"Selangkah Lebih Dekat ke Kebun Bebas Penyakit” <br /> 
         Unggah Foto dan Mulai Analisis!</h1>
         <Link to="/FiturCamera">
         <button className="bg-[#618264] text-white py-4 px-6 rounded-2xl font-bold">Scan Untuk Mendeteksi</button>
         </Link>
      </div>


  </div >

  )
}

export default Home4