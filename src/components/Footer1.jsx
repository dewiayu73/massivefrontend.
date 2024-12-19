import React from 'react'
import TelpImage from "../assets/img/telp.png"
import EmailImage from "../assets/img/email.png"
import TwitterImg from "../assets/img/twitter.png"
import IgImg from "../assets/img/instagram.png"
import FbImg from "../assets/img/facebook.png"
import Linkid from "../assets/img/linkedin.png"

const Footer = () => {
  return (
          <footer className="bg-[#d0e7d2] text-medium py-8 px-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start 
            md:items-center pb-24 px-16 pt-4 ">
              {/* Contact Info */}
              <div className="flex flex-col space-y-4 mb-4 md:mb-0">
                <div className="flex items-center space-x-2 text-xl">
                  <img src={TelpImage} alt="Telpon" />
                  <span>+62-589-904-908</span>
                </div>
                <div className="flex items-center space-x-2 text-xl">
                  <img src={EmailImage} alt="Email" />
                  <span>vinevisionsolution@gmail.com</span>
                </div>
              </div>
      
              {/* Location */}
              <div className="flex flex-col mb-4 md:mb-0">
                <h4 className="font-black text-xl">Location</h4>
                <p className='text-xl pt-2'>Jl.Hang Lekiu KM 2 Sambau, Kecamatan <br /> 
                Nongsa, Kota Batam, Kepulauan Riau <br /> 29466</p>
              </div>
      
              {/* Services */}
              <div className="flex flex-col mb-4 md:mb-0">
                <h4 className="font-black text-xl">Layanan</h4>
                <p className='text-xl pt-2'>DASH (Disease Diagnosis)
                <br />Specialized Disease Treatment
                <br />Article</p>
              </div>
            </div>
      
            {/* Copyright */}
            <div className="container mx-auto flex justify-between items-center pr-20 pb-4" >
            <div className="text-left pl-16 pb-4 text-xl">
              Copyright &copy; 2024 | VineVision
            </div>

              {/* Social Media Icons */}
              <div className="flex space-x-9 mt-4 md:mt-0">
                <a href="#">
                  <img src={TwitterImg} alt="" />
                </a>
                <a href="#">
                  <img src={IgImg} alt="" />
                </a>
                <a href="#">
                  <img src={FbImg} alt="" />
                </a>
                <a href="https://github.com/dewiayu73">
                  <img src={Linkid} alt="" />
                </a>
                </div>
                </div>
          </footer>
  )
}

export default Footer