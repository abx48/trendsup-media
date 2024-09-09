import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { LogoWhite } from "../assets/export";

const Footer = () => {
    return (
        <div className="flex flex-col px-[70px] bg-[#666AE5]">
            <div className="flex justify-between gap-[30px] flex-wrap pt-[50px] pb-[20px] font-poppins border-b border-solid border-[#ffffff]">
                <div className="flex flex-col gap-[10px]">
                    <img src={LogoWhite} alt="Logo" className="h-[60px] w-[212px] relative right-[10px]" />
                    <p className="text-[14px] text-[#FFFFFF] max-w-[342px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div className="flex items-center gap-[20px] mt-[10px]">
                        <a href="">
                            <FaFacebook className="h-[20px] w-[20px] text-[#FFFFFF] cursor-pointer" />
                        </a>
                        <a href="">
                            <FaTwitter className="h-[20px] w-[20px] text-[#FFFFFF] cursor-pointer" />
                        </a>
                        <a href="">
                            <FaYoutube className="h-[20px] w-[20px] text-[#FFFFFF] cursor-pointer" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-[15px]">
                    <h4 className="text-[18px] text-[#FFFFFF] font-semibold">Navigation</h4>
                    <div className="flex flex-col gap-[5px]">
                        <NavLink to='/' className="text-[14px] text-[#FFFFFF] cursor-pointer">Home</NavLink>
                        <NavLink to='/' className="text-[14px] text-[#FFFFFF] cursor-pointer">About</NavLink>
                        <NavLink to='/' className="text-[14px] text-[#FFFFFF] cursor-pointer">Services</NavLink>
                        <NavLink to='/' className="text-[14px] text-[#FFFFFF] cursor-pointer">Team</NavLink>
                        <NavLink to='/' className="text-[14px] text-[#FFFFFF] cursor-pointer">Contact</NavLink>
                    </div>
                </div>

                <div className="flex flex-col gap-[15px]">
                    <h4 className="text-[18px] text-[#FFFFFF] font-semibold">Quick Links</h4>
                    <div className="flex flex-col gap-[5px]">
                        <NavLink to='/' className="text-[14px] text-[#FFFFFF] cursor-pointer">Contact Us</NavLink>
                        <NavLink to='/' className="text-[14px] text-[#FFFFFF] cursor-pointer">FAQs</NavLink>
                        <NavLink to='/' className="text-[14px] text-[#FFFFFF] cursor-pointer">Blogs</NavLink>
                        <NavLink to='/' className="text-[14px] text-[#FFFFFF] cursor-pointer">Team</NavLink>
                        <NavLink to='/' className="text-[14px] text-[#FFFFFF] cursor-pointer">Pricing</NavLink>
                    </div>
                </div>

                <div className="flex flex-col gap-[15px]">
                    <h4 className="text-[18px] text-[#FFFFFF] font-semibold">Work Hours</h4>
                    <p className="text-[14px] text-[#FFFFFF] flex items-center gap-[5px]"><FaRegClock /> 7 AM - 5 PM, Mon - Sat</p>
                    <p className="text-[14px] text-[#FFFFFF] max-w-[244px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="h-[45px] w-[127px] bg-[#FFFFFF] text-[#333D29] text-[14px] rounded-[30px] flex justify-center items-center gap-[5px]"> <FaPhoneAlt /> Call Us</button>
                </div>
            </div>

            <div className="flex justify-between items-center py-[20px]">
                <p className="text-[14px] text-[#ffffff]">Copyright &copy; 2024 ZepTech | All Rights Reserved</p>
                <p className="text-[14px] text-[#ffffff]">Design & Developed by Webexcep</p>
            </div>
        </div>
    )
}

export default Footer;