import React from 'react'
import FeatureImage from '../assets/img/Feature3.png'
import featureIcon from '../assets/img/feature4.png'

const Feature3 = () => {
  return (
 <div className='grid grid-cols-2 pt-32 pb-28'>
  <div className='pl-12'>
  <img src={FeatureImage} alt="" />
  </div>
  <div>
    <h1 className='text-[40px] font-bold'>Specialized Disease Treatment</h1>
    <p className='text-xl text-justify pr-12 pt-16 leading-10'>Penyakit tanaman anggur dapat menghambat pertumbuhan dan menurunkan kualitas hasil panen. Perawatan penyakit khusus memungkinkan deteksi dini, penanganan efektif, dan pencegahan penyebaran penyakit secara menyeluruh.</p>
  <div>

      <div className="flex items-start pt-12">
        <div>
          <img src={featureIcon} alt="" />
        </div>
        <div>
          <h3 className="text-xl font-semibold pl-8 pb-3">Panduan Perawatan Lengkap:</h3>
          <p className="text-xl pl-8">Tindakan pencegahan dan solusi praktis.</p>
        </div>
      </div>
      <div className="flex items-start pt-12">
        <div>
          <img src={featureIcon} alt="" />
        </div>
        <div>
          <h3 className="text-xl font-semibold pl-8 pb-3">Langkah Penanganan Efektif:</h3>
          <p className="text-xl pl-8">Cegah penyebaran penyakit lebih lanjut.</p>
        </div>
     
    </div>


    
    </div>
  </div>
 </div>

  )
}

export default Feature3