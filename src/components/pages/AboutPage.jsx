import React from 'react'
import about from "../../assets/stefancoders-vpn-4271288.jpg"

const AboutPage = () => {
  return (
    <div>
      <div className='flex justify-between items-center w-300 mx-auto my-30'>
        <div className='w-150'>
            <h1 className='font-bold text-2xl my-5'>ABOUT ME</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa labore, excepturi ipsum praesentium earum fugiat voluptatum expedita nostrum modi. Corporis vero consequatur ea doloribus, perspiciatis debitis culpa quaerat impedit, laudantium non accusantium accusamus minus tempore temporibus numquam? Quas tempore veritatis velit ipsam laboriosam est repudiandae hic minus! Quas id eos laboriosam illum blanditiis perspiciatis quidem hic perferendis excepturi est? Quos reprehenderit amet illum, est veritatis voluptas magnam dolore in minus laboriosam cum nihil totam corrupti minima. Libero consequuntur molestiae maxime eos animi cum, hic eveniet magnam neque, quaerat dignissimos, voluptatem molestias? Impedit, expedita dolorem incidunt beatae obcaecati porro dolor nostrum!</p>
        </div>

        <div className='w-150'>
            <img src={about} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
