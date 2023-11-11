import React from 'react'
import { BiSolidMicrophone } from 'react-icons/bi';

const VoiceInput = () => {
  return (
    <div className='w-full bg-[#94BDF1] h-full'>
        <p className='text-4xl font-semibold text-center pt-9'>Speak</p>
        <div className='text-8xl flex flex-col items-center mt-20'>
            <div className='h-56'>
                <button className='bg-[#327AD9] w-44 h-44 hover:w-48 hover:h-48 transition-all flex items-center justify-center rounded-full'>
                    <BiSolidMicrophone />
                </button>
            </div>
            <p className='text-2xl mt-3'>Start speaking</p>
        </div>
    </div>
  )
}

export default VoiceInput