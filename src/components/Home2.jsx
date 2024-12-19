import React from 'react'
import WhyImage from '../assets/img/why.png'

const HomeWhy = () => {
  return (
    <div className="why grid grid-cols-2 items-center gap-20 py-28 px-16">
    <div className="box">
      <img src={WhyImage} alt="Why Image" />
    </div>
    <div className="box">
    <h1 className="text-3xl font-bold mb-7" >Mengapa Deteksi Penyakit Pada Tanaman Itu Penting?</h1>
    <p className="text-xl leading-10"> 1. Meminimalkan Penggunaan Pestisida  Berlebihan Pada Tanaman <br />
        2. Mengurangi penyebaran penyakit antar tanaman <br />
        3. Tanaman sehat menghasilkan buah  dengan kualitas yang lebih baik <br />
        4. Meminimalkan kerugian dengan  menghindari gagal panen</p>
    </div>
  </div>
  )
}

export default HomeWhy