import React from 'react'
import Jamur from '../assets/img/jamurtepung.png'
import Bulu from '../assets/img/bulu halus.png'

const Blog3 = () => {
  return (
    <div>
        <div className="w-[1343px] h-[0px] border-2 border-[#618264] "></div>

        <div className=" mx-auto pt-6 px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Kolom pertama */}
        <div>
          <h3 className="text-3xl font-bold">Jamur tepung</h3>
          <div className='pt-8 pr-4'>
          <img src={Jamur} alt="" />
          </div>
          <p className="text-xl mb-4 pt-8 pr-4 text-justify">
          Embun tepung, yang disebabkan oleh jamur Erysiphe necator , merupakan penyakit penting pada tanaman anggur di 
          Australia dan di seluruh dunia. Jika tidak dikendalikan dengan baik, penyakit ini akan mengurangi hasil dan 
          kualitas anggur serta anggur yang dihasilkan. <br /> <br />
          Embun tepung muncul sebagai pertumbuhan tepung berwarna abu-abu-putih yang khas pada jaringan hijau tanaman anggur. 
          Infeksi pada saat pembungaan atau segera setelahnya menyebabkan kerusakan paling parah pada anggur. Gejala utama 
          pada daun adalah bercak kuning tidak beraturan yang paling jelas terlihat pada permukaan atas dan, pada varietas 
          seperti Chardonnay, disertai dengan pencoklatan pada urat daun terkecil (tersier) di sisi bawah. Bercak-bercak 
          tersebut segera menunjukkan embun tepung putih yang khas saat bercak-bercak meluas dan menyatu di kedua permukaan 
          daun.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          
        
        </div>
        
        {/* Kolom kedua */}
        <div className="border-l-4 border-[#618264] pl-4">
          <h3 className="text-3xl font-bold">Penyakit bulai berbulu halus</h3>
          <div className='pt-8 pr-4'>
          <img src={Bulu} alt="" />
          </div>
          <p className="text-xl mb-4 pt-8 pr-4 text-justify">
          Jamur berbulu halus merupakan penyakit utama tanaman anggur yang disebabkan oleh oomycete mirip jamur 
          Plasmopara viticola. Spesies ini unik untuk tanaman anggur dan tumbuh di semua distrik penanaman anggur 
          Australia. Penyakit ini menyebar melalui angin dan air dan kondisi yang menguntungkan untuk infeksi dan 
          perkembangan penyakit terjadi pada cuaca hangat dan basah, terutama pada akhir musim semi dan awal musim panas.
          Di sebagian besar distrik, tanaman anggur berada pada risiko terbesar dari 3-6 minggu setelah kuncup pecah 
          hingga buah berukuran sebesar kacang polong. Pengendalian jamur berbulu halus yang tidak memadai dapat 
          mengakibatkan kerugian panen yang parah.
          </p>
          
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default Blog3