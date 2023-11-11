import React from 'react'
import logo from '../assets/logo.png'
import {AiFillHome} from 'react-icons/ai'
import { BsFillChatFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';

const Menu = () => {
  return (
    <div className='bg-[#327AD9] w-2/12 h-screen'>
        <div className='h-24 flex justify-center items-center'>
            <img src={ logo } width={100} />
        </div>
        <ul className='px-3 flex flex-col gap-3'>
            <li className='bg-[#5E9FF2] px-5 py-3 rounded-lg text-slate-50 flex items-center gap-5 cursor-pointer hover:bg-slate-50 hover:text-black'>
                <AiFillHome />
                <p>Home</p>
            </li>
            <li className='bg-[#5E9FF2] px-5 py-3 rounded-lg text-slate-50 flex items-center gap-5 cursor-pointer hover:bg-slate-50 hover:text-black'>
                <BsFillChatFill />
                <p>Chat</p>
            </li>
            <li className='bg-[#5E9FF2] px-5 py-3 rounded-lg text-slate-50 flex items-center gap-5 cursor-pointer hover:bg-slate-50 hover:text-black'>
                <IoMdSettings />
                <p>Settings</p>
            </li>
        </ul>
    </div>
  )
}

export default Menu