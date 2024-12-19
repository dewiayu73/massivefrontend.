import { useState } from "react";
import QAIcon from '../assets/img/q&a.png'

const questions = [
  {
    question: "Apa saja tantangan utama dalam sektor pertanian saat ini?",
    answer: "Tantangan utama meliputi perubahan iklim, keterbatasan sumber daya, dan serangan hama.",
  },
  {
    question: "Siapa saja yang paling terdampak oleh tantangan dalam pertanian?",
    answer: "Petani, Konsumen, dan Lingkungan",
  },
  {
    question: "Mengapa penyakit pada daun tanaman anggur menjadi tantangan besar bagi pertanian?",
    answer: "Penyakit pada daun tanaman anggur menjadi tantangan besar bagi pertanian karena menghambat fotosintesis, menyebar cepat, menurunkan kualitas dan nilai pasar buah, memerlukan biaya pengendalian tinggi, merusak lingkungan, meningkatkan kerentanan tanaman terhadap hama dan penyakit lainnya, serta memberikan tekanan ekonomi pada petani dan komunitas.",
  },
  {
    question: "Di mana tantangan pertanian kebun anggur paling dirasakan? ",
    answer: "Tantangan pertanian kebun anggur paling dirasakan di daerah dengan kondisi iklim yang tidak sesuai dan tanah yang kurang subur. Selain itu, kesulitan dalam mengendalikan penyakit dan hama, biaya produksi yang tinggi, dan persaingan dengan anggur impor juga menjadi tantangan besar.",
  },
  {
    question: "Di mana Precision Farming diterapkan?",
    answer: "Precision farming diterapkan di berbagai jenis lahan pertanian di seluruh dunia, termasuk perkebunan kelapa sawit, padi, sayuran, dan buah-buahan. Di Indonesia, penerapan teknologi ini masih dalam tahap pengembangan tetapi menunjukkan potensi besar untuk meningkatkan hasil pertanian.",
  },
  {
    question: "Kapan waktu terbaik untuk menerapkan Precision Farming?",
    answer: "Waktu terbaik untuk menerapkan precision farming adalah saat memulai musim tanam baru atau ketika ada perubahan signifikan dalam kondisi cuaca atau tanah. Implementasi awal dapat membantu petani merencanakan strategi pengelolaan yang lebih baik sepanjang musim",
  },
  {
    question: "Bagaimana cara kerja Precision Farming?",
    answer: "Precision farming bekerja dengan mengumpulkan data dari berbagai sumber seperti sensor tanah, drone, dan sistem informasi geografis (GIS). Data ini kemudian dianalisis untuk memberikan wawasan tentang kebutuhan tanaman dan kondisi lahan, sehingga petani dapat melakukan tindakan yang tepat seperti penjadwalan irigasi dan pemupukan sesuai kebutuhan spesifik setiap area lahan.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-64">
    <div className="bg-[#618264] rounded-3xl shadow-md px-0,15 pb-2 pt-2 w-full max-w-3xl">
      <div className="flex items-center pl-12 pb-2">
      <img src={QAIcon} alt="" />
      <h1 className="text-3xl font-bold text-white pl-4">Question</h1>
      </div>
      {questions.map((item, index) => (
        <div key={index} className="mb-1">
          <div
            onClick={() => toggleAnswer(index)}
            className="cursor-pointer bg-white p-3 shadow-sm border-2 border-black hover:bg-[#d0e7d2] transition-all"
          >
            <h2 className="text-xl text-black">{item.question}</h2>
          </div>
          {activeIndex === index && (
            <div className="mt-1 p-3 border-2 bg-gray-250 shadow-inner">
              <p className="text-xl text-white">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}
