import React, { useEffect } from 'react';
import {useState} from 'react'
import BotMessage from '../components/BotMessage';
import UserMessage from '../components/UserMessage';
import TextInput from '../components/TextInput';

import { BiSolidMicrophone } from 'react-icons/bi';
import VoiceInput from '../components/VoiceInput';

const Chat = () => {
    const [isVoiceActivated, useVoice] = useState(false);
    const [userNumber, setNumber] = useState(0);
    const [chatHistory, addMessage] = useState([]);
    const [messageData, setData] = useState("");

    /* useEffect(() => {
        fetch("http://127.0.0.1:8080/predict").then(
            res => res.json()
        ).then(
            data => {
                setData(data);
                addMessage([...chatHistory, data])
                console.log(chatHistory, data);
            }
        )
    }, [userNumber]); */

    /* useEffect(() => {
        console.log("Started");
        fetch("/predict").then((res) => {
            console.log(res.json());
            res.json().then((data) => {
                console.log(data);
                addMessage([...chatHistory, data]);
                console.log(chatHistory);
            })}
        )
    }, []); */

    const handleMessaggeAdd = (type, message) => {
        const msg = {
            type: type,
            message: message
        }
        console.log(msg);

        addMessage([...chatHistory, msg]);
        const response = fetch("http://127.0.0.1:8080/predict", {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(msg)
        }).then(
            res => {
                res.json().then((data) => {
                    console.log(data.message);
                    return data.message;
                })
            }
        )
        console.log("Response: ", response);
        setNumber(userNumber+1);
        console.log(chatHistory);
    }

  return (
    <div className='w-full flex justify-between'>
        <div className={`${isVoiceActivated ? 'w-7/12' : 'w-full'}`}>
            <div className='w-full h-16 bg-slate-300 flex items-center p-5 shadow-lg' >
                <p className='text-xl font-semibold'>
                    Talk with me
                </p>
                <button className='flex items-center gap-2 bg-[#5E9FF2] hover:bg-[#327AD9] p-3 rounded-md mx-12' onClick={() => {
                    if (isVoiceActivated) useVoice(false);
                    else useVoice(true);
                }}>
                    <BiSolidMicrophone />
                    Use Voice
                </button>
            </div>
            <div className='h-[77vh] overflow-y-scroll'>
                <BotMessage message={"Hi! How are you feeling today?"} />
                <UserMessage message={"I'm not feeling that good..."} />
                <BotMessage message={"That's not good....what's wrong?"} />
                <UserMessage message={"I'm really not feeling well today. I've been feeling so down, and it's been hard to shake this feeling of sadness and emptiness. I don't even know where it's coming from; it just seems like everything is going wrong in my life right now, and I can't find any joy or motivation. I've been struggling with my thoughts and emotions, and I just don't know how to deal with it."} />
                <BotMessage message={"Can you elaborate further on why you feel this way?"} />
                <UserMessage message={"I wish I could pinpoint exactly what's causing me to feel this way, but it's not that simple. It's like a combination of various factors piling up. I've been dealing with a lot of stress at work, and it feels like I'm constantly under pressure to meet deadlines and perform well. On top of that, there are some personal issues I'm grappling with, like problems in my relationships and a sense of loneliness. It's all become overwhelming, and I'm finding it hard to cope."} />
                <BotMessage message={"I'm really sorry to hear that you're going through such a tough time, and I want you to know that you're not alone in feeling this way. It's completely normal to face challenges and periods of emotional distress in life."} />
                <UserMessage message={"Thanks for that!"} />
                {chatHistory.map(chat => {
                    if (chat.type == "user") {
                        return <UserMessage message={chat.message} />
                    }
                    else {
                        return <BotMessage message={chat.data} />
                    }
                })}
            </div>

            <div className='p-5 fixed w-10/12 bottom-1'>
                <TextInput handleMessageAdd={handleMessaggeAdd} />
            </div>
        </div>
        <div className={`${isVoiceActivated ? 'w-5/12' : 'hidden'}`}>
            <VoiceInput />
        </div>
    </div>
  )
}

export default Chat;