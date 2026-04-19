import React from 'react'
import background from "../../assets/meandyou2-headshot-2644201_640.jpg" 

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center gap-5 w-300 mx-auto'>
      <div className='w-150'>
        <h1 className='font-bold text-2xl my-3 font-serif'>WELCOME TO MY PAGE</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere perspiciatis necessitatibus, quas recusandae molestiae fugiat culpa provident debitis voluptatum fugit alias similique odit aut nisi neque iste porro quos doloremque temporibus ipsa! Unde repudiandae ab dolorem, quaerat et, sint consectetur earum dolores commodi beatae accusantium voluptates impedit fuga quia voluptatibus, praesentium iure. Dignissimos aperiam pariatur labore mollitia eos? Voluptas quo impedit sit cumque voluptates possimus id illum unde beatae consectetur quod debitis dolor facere ex, veritatis perferendis animi vitae iste nesciunt tempora optio corrupti eaque, provident laboriosam! Unde illum odio doloribus earum nobis modi quo provident porro nam sit.</p>
      </div>
    <div className="w-150 mx-auto" >
      <img src={background} className='w-300 h-[80vh]' alt=""/>
    </div>
    </div>
  )
}

export default HeroSection
