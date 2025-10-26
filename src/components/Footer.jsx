import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mt-40'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio corporis recusandae, nulla aut inventore unde sit? Suscipit, id minus.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul>
            <li className='text-gray-600 mb-3'>About Us</li>
            <li className='text-gray-600 mb-3'>Careers</li>
            <li className='text-gray-600 mb-3'>Blog</li>
            <li className='text-gray-600 mb-3'>Pricing</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul>
            <li className='text-gray-600 mb-3'>1234 Street Name</li>
            <li className='text-gray-600 mb-3'>email@example.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='text-center text-gray-600 mt-4'>© 2025 E-Comerce SMIT project . All rights reserved.></p>
      </div>
    </div>   




  )
}

export default Footer
