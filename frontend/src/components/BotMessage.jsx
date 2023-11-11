import React from 'react'

const BotMessage = (props) => {
    const { message } = props;
  return (
    <div className='w-3/5 bg-[#E3E7ED] p-3 ml-9 mt-6 border-2 border-[#B3CDEE] rounded-md'>
        { message }
    </div>
  )
}

export default BotMessage