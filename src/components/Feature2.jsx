import React from 'react'
import { Link } from "react-router-dom"

const Feature2 = () => {
  return (
    <div className="bg-[url('/src/assets/img/featureim.png')] bg-right bg-no-repeat bg-contain pt-8 pb-4 pl-12">
      <h1 className='text-[40px] font-extrabold'>Disease Diagnosis </h1>
      <p className='text-xl leading-10 text-justify pt-4'>Gunakan  alat  diagnostik  kami  untuk  mendeteksi  masalah  pada  tanaman  Anda <br />
      dengan  cepat  dan  akurat. Pastikan  tanaman  mendapatkan  perawatan  yang <br />
      tepat  dan  efektif.</p>
      <p className='text-xl leading-10 text-justify pt-12 pb-4'>Petunjuk : <br />
1. Klik button “Scan” untuk memulai <br />
2. Pastikan scan ke arah bagian daun yang bermasalah <br />
3. Tunggu hasil diagnosa</p> 
<Link to="/FiturCamera">
<button className="bg-[#618264] text-white py-4 px-16 rounded-2xl font-bold">Scan</button>
</Link>
</div>
   
  )
}

export default Feature2