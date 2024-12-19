import React from 'react'

const HomeFour = () => {
  return (
    <div className="grid items-center bg-white pb-24">
      <div className="grid grid-cols-2 h-80 mr-16">
        <h2 className="text-black font-bold text-center justify-center items-center  text-3xl mt-52 ml-4">
          Mengapa Vinevision?
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#618264] text-white text-xl text-center py-16 pt-20 px-8 shadow-slate-500 ">
            Akurasi tinggi dengan teknologi analisis gambar
          </div>
          <div className="bg-[#618264] text-white text-xl text-center py-16 px-8 shadow-slate-500 ">
            Akses panduan perawatan langsung dari hasil diagnosis
          </div>
          <div className="bg-[#618264] text-white text-xl text-center py-20 px-8 shadow-slate-500 ">
            Diagnosis cepat dan otomatis
          </div>
          <div className="bg-[#618264] text-white text-xl text-center py-20 px-8 shadow-slate-500 ">
            Tidak perlu keahlian teknis, cukup foto daun Anda
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFour