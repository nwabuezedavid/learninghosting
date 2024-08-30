"use client"

import { useEffect, useState,useRef } from "react"
// import {useRef, useState, useEffect} from 'react'
import Link  from 'next/link';

const LevelOnehead = () => {
    const [text, settext] = useState(["Staking", 'Trading','Investing'])
    const [count, setcon] = useState(0)
    const textement = useRef()
    useEffect(()=>{
        const sd = setInterval(() => {
            text[count]
            setcon((e)=> e+1 == text.length  ? 0 : e+=1)
        }, 4000);
        textement.current.innerHTML = text[count]
        return () => {
            clearInterval(sd);
        };
    },[count])
  return (
    <div className="flex max-md:pt-[12%] w-full max-h-[70vh] h-[50vh] text-center    px-auto items-center justify-center flex-col gap-2   ">
        
        <span  className='text-[3.2em] max-sm:text-[2rem] uppercase w-full font-bold'>Your one stop platform for <br/> crypto  

            <b style={ {animationDuration: '4000ms',animationDelay: '5000ms',  
    // Optional
  }} className="text-red-500  animate-ping  uppercase" ref={textement}> </b>
        </span>
        <ul className="flex w-fit my-3 max-md:text-[100%] gap-3 text-gray-500 text-2xl">
            <li>• FIU Compliant •</li>
            <li> Insured Funds •</li>
            <li> Encrypted data •</li>
        </ul>
        <Link href="/register" className="w-[300px] bg-gradient-to-r to-red-300 from-blue-900 p-3 rounded font-bold text-white " >GET STARTED</Link>
    
    </div>
  )
}

export default LevelOnehead