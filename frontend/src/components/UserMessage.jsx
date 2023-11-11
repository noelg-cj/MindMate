import React from 'react'

const UserMessage = (props) => {
    const { message } = props;
  return (
    <div className='flex justify-end w-full'>
        <div className='bg-[#5E9FF2] w-3/5 p-3 mr-9 mt-6 rounded-md'>
            { message }
        </div>
    </div>
  )
}

export default UserMessage;