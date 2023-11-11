import React, {useState} from 'react'
import { IoMdSend } from 'react-icons/io'

const TextInput = ({ handleMessageAdd }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const submit = (event) => {
    event.preventDefault();
    console.log("Submitted message - ", message);
    handleMessageAdd("user", message);
  }

  return (
    <form onSubmit={submit} className='bg-[#E3E7ED] border-2 border-[#B3CDEE] rounded-md'>
       <label className='flex'>
            <input type='text' name='Chat' onChange={handleChange} autoComplete='off' placeholder="Tell us how you're feeling today!" className='bg-[#E3E7ED] p-5 w-full focus:outline-[#5E9FF2] rounded-md' /> 
            <div className='p-2'>
                <button type='submit' className='w-14 h-14 bg-[#0460D9] text-slate-50 flex justify-center items-center rounded-md'>
                    <IoMdSend size={25} />
                </button>
            </div>
       </label>
    </form>
  )
}

export default TextInput