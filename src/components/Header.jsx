import { NavLink } from 'react-router-dom';
import { Logo } from '../assets/export';

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[75px] w-full px-[70px] bg-[#F0F0FB] fixed left-0 top-0 z-50">
      <img src={Logo} alt="Logo" className='h-[48px] w-[159px]' />

      <div className='flex items-center gap-[35px]'>
        <NavLink to='/' className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer">Home</NavLink>
        <NavLink to='/' className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer">About</NavLink>
        <NavLink to='/' className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer">Services</NavLink>
        <NavLink to='/' className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer">Team</NavLink>
        <NavLink to='/' className="text-[#333D29] hover:text-[#666AE5] text-[15px] font-semibold cursor-pointer">Contact</NavLink>
      </div>

      <button className='h-[50px] w-[170px] bg-[#43D9B3] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#666AE5]'>
        <p className='text-[15px] text-[#FFFFFF] font-semibold'>Get Started</p>
      </button>
    </div>
  )
}

export default Header;