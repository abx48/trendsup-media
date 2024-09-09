import { useState } from "react";
import { FaTelegramPlane, FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { CircleIcon, CubeIcon1, CubeIcon2, DigitalServicesBanner, DigitalServicesIcon, EnrichDesignBanner, HelpBanner, HomeBanner, SpecialityIcon1, SpecialityIcon2, SpecialityIcon3 } from "../assets/export";

const Home = () => {
  const [specialityData, setSpecialityData] = useState([
    {
      banner: SpecialityIcon1,
      title: 'Dubbing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      link: '',
    },
    {
      banner: SpecialityIcon2,
      title: 'Voiceover',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      link: '',
    },
    {
      banner: SpecialityIcon3,
      title: 'Subtitling',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      link: '',
    },
  ]);

  const [helpBusinessGrowingData, setHelpBusinessGrowingData] = useState(['Creating a great digital experience', 'Focus on people, interactions and collaboration', 'High standards of professionalism', 'A different way of thinking, both inside']);

  return (
    <>
      <div className="mt-[75px] pl-[70px] pt-[50px] flex justify-between items-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0F0FB, #FFFFFF)' }}>
        <div className="flex flex-col gap-[20px] relative">
          <img src={CircleIcon} alt="Circle-Icon" className="absolute left-[350px] top-[-150px] z-10" />
          <h1 className="absolute left-[-70px] top-[-150px] text-[180px] text-[#ffffff] font-semibold uppercase z-0">Digital</h1>

          <h2 className="max-w-[650px] text-[50px] text-[#262626] font-semibold font-helvetica tracking-wide leading-snug uppercase z-10">TrendsUp Media, Your Gateway to Global Business</h2>
          <p className="text-[19px] text-[#696969] z-10">Breaking Barriers one word at a time</p>

          <div className="flex items-center gap-[20px] z-10">
            <button className='h-[50px] w-[170px] bg-[#666AE5] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#43D9B3]'>
              <p className='text-[15px] text-[#FFFFFF] font-semibold'>Get Started</p>
            </button>

            <div className="flex items-center gap-[5px] cursor-pointer">
              <FaTelegramPlane className="text-[#5b9ff2] text-[24px]" />
              <p className="text-[14px] font-semibold hover:text-[#666AE5]">Join Us on Telegram</p>
            </div>
          </div>
        </div>

        <div className="relative left-[100px]">
          <img src={HomeBanner} alt="Home-Banner" className="w-full max-w-[750px]" />
          <img src={CubeIcon1} alt="Cube-Icon" className="absolute top-[380px] left-0 w-full max-w-[150px]" />
          <img src={CubeIcon2} alt="Cube-Icon" className="absolute top-[200px] right-[20px] w-full max-w-[150px]" />
        </div>
      </div>

      <div className="px-[70px] bg-[#FFFFFF] flex justify-center items-center">
        <div className="flex justify-between items-center bg-[#FFFFFF] rounded-[10px]" style={{ boxShadow: '7px 5px 30px 0px rgba(0, 0, 0, 0.12)' }}>
          {specialityData.map((item, index) => (
            <>
              <div className="flex flex-col items-center px-[35px] pt-0 pb-[30px]" key={index}>
                <img src={item.banner} alt="Speciality-Banner" className="w-full max-w-[290px]" />
                <h3 className="text-[17px] text-[#262626] font-semibold uppercase">{item.title}</h3>
                <p className="mt-[10px] text-[14px] text-[#696969] text-center">{item.description}</p>

                <button className="mt-[15px] text-[14px] text-[#666AE5] font-semibold flex justify-center items-center gap-[5px]">
                  <p>Learn More</p>
                  <FaLongArrowAltRight className="text-[18px]" />
                </button>
              </div>

              {index !== 2 && <div className="h-[300px] w-[1px] bg-[#E5E5E5]"></div>}
            </>
          ))}
        </div>
      </div>

      <div className="px-[70px] bg-[#FFFFFF] pt-[70px] pb-[30px] flex justify-between items-center gap-[20px]">
        <div className="flex justify-center items-center relative right-[70px]">
          <img src={HelpBanner} alt="Help-Banner" className="w-full max-w-[700px]" />
        </div>

        <div className="flex flex-col gap-[20px] relative">
          <h1 className="absolute left-[-80px] top-[-120px] text-[130px] text-[#F2F2FB] font-medium uppercase z-0">Why</h1>

          <h2 className="max-w-[630px] text-[40px] text-[#262626] font-semibold font-helvetica tracking-wide leading-snug uppercase z-10">Experts in Enhancing your content</h2>
          <p className="text-[16px] max-w-[450px] text-[#696969] leading-7 z-10">Personalization assumed up an excess of position in the showcasing space and has made each and every one of your messages exhausting and without feelings.</p>

          <div className="flex flex-col gap-[20px] z-10">
            {helpBusinessGrowingData.map((item, index) => (
              <div className="flex items-center gap-[10px]" key={index}>
                <div className="h-[30px] w-[30px] rounded-full bg-[#666AE5] flex justify-center items-center">
                  <FaCheck className="text-[#ffffff] text-[14px]" />
                </div>

                <p className="text-[16px] text-[#696969]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-[70px] pt-[70px] pb-[50px] bg-[#666AE5] flex justify-between items-center gap-[20px]">
        <div className="flex flex-col gap-[10px] relative">
          <h1 className="absolute left-[0px] top-[-100px] text-[150px] text-[#5458D8] font-medium uppercase z-0">Quality</h1>

          <h2 className="max-w-[550px] text-[50px] text-[#ffffff] font-semibold font-helvetica tracking-wide leading-snug uppercase z-10">digital Services for Your needs</h2>
          <p className="text-[16px] max-w-[450px] text-[#ffffff] leading-7 z-10">Personalization assumed up an excess of position in the showcasing space and has made each and every one of your messages exhausting and without feelings.</p>
          <button className='h-[50px] w-[170px] mt-[10px] bg-[#43D9B3] text-[#FFFFFF] rounded-[5px] flex justify-center items-center transition-all hover:bg-[#ffffff] hover:text-[#262626]'>
            <p className='text-[15px] font-medium'>Get Started</p>
          </button>
        </div>

        <div className="flex justify-center items-center relative right-[0px]">
          <img src={DigitalServicesBanner} alt="Digital-Services-Banner" className="w-full max-w-[550px]" />
          <img src={DigitalServicesIcon} alt="Digital-Services-Icon" className="w-full max-w-[550px] absolute right-0 top-0" />
        </div>
      </div>

      <div className="pl-[70px] bg-[#FFFFFF] flex justify-between items-center overflow-hidden">
        <div className="flex flex-col gap-[10px] relative">
          <h1 className="absolute left-[0px] top-[-90px] text-[120px] text-[#F2F2FB] font-semibold uppercase z-0">About</h1>

          <h2 className="max-w-[450px] text-[40px] text-[#262626] font-semibold font-helvetica tracking-wide leading-snug uppercase z-10">Enrich your design workflow</h2>
          <p className="max-w-[500px] text-[15px] text-[#696969] leading-7 z-10">This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service. Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve clear, long-term objectives.</p>

          <div className="flex items-center gap-[20px] z-10">
            <button className='h-[50px] w-[170px] mt-[10px] bg-[#43D9B3] hover:bg-[#666AE5] rounded-[5px] flex justify-center items-center transition-all'>
              <p className='text-[15px] text-[#FFFFFF] font-semibold'>Contact Us</p>
            </button>
          </div>
        </div>

        <div className="relative left-[100px]">
          <img src={EnrichDesignBanner} alt="Enrich-Design Banner" className="w-full max-w-[750px]" />
        </div>
      </div>
    </>
  )
}

export default Home;