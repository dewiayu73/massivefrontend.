import React from 'react'

const Panduan2 = () => {
  return (
    <div className="items-center space-y-4 pt-8">
    <h2 className="text-4xl font-semibold pl-12 text-left">Cara Menggunakan</h2>

    <div className="relative w-full h-screen bg-white flex justify-center items-center">
      {/* Container Diagram */}
      <div className="relative w-[900px] h-[500px]">
        {/* Nodes */}
        <div className="absolute top-[50px] left-[50px] flex items-center justify-center w-[200px] h-[175px] bg-[#d0e7d2] rounded-full text-center shadow-lg text-2xl font-semibold">
          Guest
        </div>
        <div className="absolute top-[50px] left-[650px] flex items-center justify-center w-[200px] h-[175px] bg-[#d0e7d2] rounded-full text-center shadow-lg text-2xl font-semibold">
          View Feature
        </div>
        <div className="absolute top-[350px] left-[50px] flex items-center justify-center w-[200px] h-[175px] bg-[#d0e7d2] rounded-full text-center shadow-lg text-2xl font-semibold">
          Select Feature
        </div>
        <div className="absolute top-[350px] left-[650px] flex items-center justify-center w-[200px] h-[175px] bg-[#d0e7d2] rounded-full text-center shadow-lg text-xl font-semibold">
          Read the Content <br />in the Feature
        </div>

        {/* Arrows */}
        <svg className="absolute top-12 left-0 w-full h-full pointer-events-none">
          {/* Arrow: Guest -> View Feature */}
          <line
            x1="250"
            y1="100"
            x2="650"
            y2="100"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          {/* Arrow: Guest -> Select Feature */}
          <line
            x1="650"
            y1="100"
            x2="250"
            y2="400"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          {/* Arrow: Select Feature -> Read Content */}
          <line
            x1="250"
            y1="400"
            x2="650"
            y2="400"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="black" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>  
  </div>
  )
}

export default Panduan2