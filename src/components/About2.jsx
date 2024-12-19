import React from 'react'
import AboutImg from '../assets/img/about1.png'


const About2 = () => {
  return (
    <div className="why grid grid-cols-2 items-center gap-8 pt-28 pb-20  px-16">
    <div className="box">
      <img src={AboutImg} alt="aboutimg" />
    </div>
    <div className="box">
    <h1 className="text-2xl font-[800] mb-7" >Apa yang Kami Lakukan</h1>
    <p className="text-xl text-justify leading-10"> VineVision adalah platform berbasis web yang menghadirkan solusi cerdas untuk 
    mendeteksi penyakit tanaman anggur menggunakan analisis gambar. Dengan hanya mengunggah foto daun anggur, pengguna
    dapat menerima diagnosis akurat dan panduan perawatan yang tepat, mendukung petani dalam memaksimalkan produktivitas 
    dan meminimalkan risiko gagal panen.</p>
    </div>
  </div>
  )
}

export default About2