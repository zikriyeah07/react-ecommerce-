import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className='mt-8 mb-4 text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 10% off your first purchase!</p>
        <p className='text-gray-400 mt-4'>Stay updated with our latest trends and offers.                                       </p>
       <form onSubmit={onSubmitHandler} className='rounded w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border p-3' action="">
           <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none border border-gray-300 p-2 rounded-l" required />
           <button className="bg-black text-white text-xs px-10 py-4">Subscribe</button>
       </form>
    </div>
  )
}

export default NewsletterBox
