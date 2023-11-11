import React from 'react'
import BotMessage from '../components/BotMessage';
import UserMessage from '../components/userMessage';

const Chat = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-16 bg-slate-300 flex items-center p-5 shadow-lg' >
            <p className='text-xl font-semibold'>
                Talk with me
            </p>
        </div>
        <div>
            <BotMessage message={"Hi! How are you feeling today?"} />
            <UserMessage message={"I'm not feeling that good..."} />
        </div>
    </div>
  )
}

export default Chat;