import React from 'react'
import { IoMdSend } from 'react-icons/io'

const TextInput = () => {
  return (
    <form className='bg-[#E3E7ED] border-2 border-[#B3CDEE] rounded-md'>
       <label className='flex'>
            <input type='text' name='Chat' placeholder="Tell us how you're feeling today!" className='bg-[#E3E7ED] p-5 w-full focus:outline-[#5E9FF2] rounded-md' /> 
            <div className='p-2'>
                <button className='w-14 h-14 bg-[#0460D9] text-slate-50 flex justify-center items-center rounded-md'>
                    <IoMdSend size={25} />
                </button>
            </div>
       </label>
    </form>
  )
}

export default TextInput