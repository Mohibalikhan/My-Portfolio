import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Get in Touch</h2>
                <p className='text-green-300 text-[18px] pt-2'>
                    Drop me a line,give me a call,or send a message

                </p>
                <div className='flex gap-3 items-center'data-aos="fade-right">
                    <AiOutlineMail size={30}/>khanmohibali1@gmail.com

                </div>

                <div className='flex gap-3 items-center'data-aos="fade-right">
                    <BsTelephone size={30}/>03173808380

                </div>
            </div>

        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="fade-left">
            <label htmlFor="name">Name</label>
            <input type="text" 
            className='h-[40px]bg-transparent border border-accent'
            id='name'/>
        </div>

        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="fade-left">
            <label htmlFor="email">Email</label>
            <input type="text" 
            className='h-[40px]bg-transparent border border-accent'
            id='email'/>
        </div>
        <div className='space-y-8' data-aos="fade-left">
            <div className='flex flex-col gap-1'>
            <label htmlFor="msg">Message</label>
            <textarea  
            className='bg-transparent border border-accent'
            id='msg' rows={8}>
            </textarea>
        </div>
        <button className='bg-lime-500 border p-2 px-6 '>Submit</button>
        
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
