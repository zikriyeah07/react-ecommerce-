import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 '>
      {/* Hero Left Side  */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2 '>
                <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                <p className='font-medium sm:py-3 lg:text-sm leading-relaxed'>OUR BESTSELLERS</p>
            </div>
            <h1 className='  prata-regular text-3xl sm:py-3 lg:text-5xlleading-relaxed'> Latest Arrivals</h1>
            <div className='flex item-center gap-2'>
                
                <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
        </div>
      </div>

      {/* Hero Right Side  */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero
