import LogoImage from "../assets/img/logovine.png"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <header>
        {/* desktop navigation section */}
        <nav className=" container flex justify-between items-center pt-4 pl-10 pb-0">
            <div className="flex items-center size-[101 65]">
                <img src={LogoImage} alt="logoimage" />
                <p className="text-[24px] font-bold leading-[40px] text-green-800">VINEVISION</p>
            </div>
            <div className="flex items-center gap-12 ">
               <Link to = "/" className='nav-link'>Home</Link>
               <Link to = "feature" className='nav-link'>Feature</Link>
               <Link to = "about" className='nav-link'>About Us</Link>
               <Link to = "blog" className='nav-link'>Blog</Link>
               <Link to = "panduan" className='nav-link'>Panduan</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar