"use client"
import Link from 'next/link'
import React, { useState,useEffect, use, useLayoutEffect } from 'react'
import { UsedogContext } from './context'
import { Uselogin } from '../context/auth'
import { useRouter } from 'next/navigation'

const NavDasd = () => {
    const [tog, settog] = useState(true)
    const {dog, setdog} = UsedogContext()
    const {user,setuser,userdetail,totaldepo,totalwith} =  Uselogin()
    const {uuid,username,balance} =userdetail.value
    const router = useRouter()
    const [userre, setfirst] = useState(typeof window !== 'undefined' && sessionStorage.getItem('userslogin'))
  
    useEffect(()=>{
        if (!userre) return  router.push('/login') 
            router.refresh()
    },[user,userre,router])
    return (
        <div className='w-full h-[10%] relative z-[99999] hidbar bg-slate-100 flex items-center justify-between'>
            <span className='flex items-center font-bold uppercase p-3'>
  <p onClick={()=>setdog(!dog)} className='bi bi-justify  text-[20px]    ml-4 cursor-pointer h-fit w-fit p-2 text-3xl  bg-white text-red-600'/>
                <img src="./logo.png" alt="investment" className="logo w-12" /> <h2>investment</h2> 
                 </span>
<div className="flex items-center gap-2 max-md:text-xs *:bg-transparent">
    <select name="" id="" className="items-center max-md:hidden  capitalize">
        <option value="">select language</option>
    </select>
    <main className='flex items-center font-bold text-gray-600 capitalized'>
 <img src="/pro.png" onClick={()=>settog(!tog)} alt="" className="profileimg w-14 max-md:w-7 max-md:h-7 h-14 rounded-full" />
   <div className=' p-2 pb-0 overflow-hidden '>
    <h2 onClick={()=>settog(!tog)} className='cursor-pointer'>{username} ^</h2>
     
   </div>
    </main>
</div>
<div className={`fixed border-t-2 rounded-md border-blue-600 mr-2 mt-3  right-0 top-[10%] max-sm:top-[8%] w-fit min-w-[240px]  ${tog && " translate-x-[100vw] transition "}  text-xs items-left flex flex-col p-3   min-h-10 bg-white shadow-lg text-`}>
            
            
        <span className='w-fit h-fit  flex  pt-3 flex-col m-2 gap-3  pb-3 text-[2em] font-bold'>
            <h1 className='uppercase text-blue-400 text-[20px]'>Main Balance:</h1>
            <big className='uppercase text-gray-700 '> usd{balance || 0}.00 </big>
        <span className='flex  flex-col *:flex   p-1 text-[10px] w-[200px] gap-2  uppercase'>
            <p className='w-full justify-between flex  items-center '>

            <h6>profit</h6>
            <p className='bi bi-arrow-up text-cyan-400 animate-bounce'>{totaldepo *10/100 || 0}%</p>
            </p>
            <p className='w-full justify-between flex  items-center'>

            <h6>loss</h6>
            <p className='bi bi-arrow-down text-red-400 animate-bounce delay-200'>{totalwith*10/100 || 0}%</p>
            </p>
        </span>
            <span className="flex flex-col w-full">

            <h3 className="text-[10px] uppercase text-gray-400">locked Balance:</h3>
            <big className='uppercase text-[10px] text-red-300'> 3000.00 usd</big>
            </span>
        </span>
        <span className="flex w-full items-center justify-left gap-2 text-white ml-3 ">
            <Link href={`/deposit/${uuid}/`}    className='w-fit hover:bg-black h-fit p-2 bg-blue-500'> Deposite</Link>
            <Link href={`/withdraw/${uuid}/`}    className='w-fit hover:bg-black h-fit p-2 bg-red-500'> Withdraw</Link>
        </span>
        <hr  className='mt-2 h-[.6px] bg-black'/> 
        <span className='w-full  h-fit flex flex-col p-2 gap-3 capitalize'>
            <Link href={`/invest/${uuid}/`} className='border-b-2 p-2 rounded-sm  hover:border-white border-blue-200'>
            Upgrade Your PLan
            </Link>
            <Link href="/profile" className='border-b-2 p-2  rounded-sm hover:border-white border-blue-200'>
            profile
            </Link>
            <Link href="#" onClick={()=>setuser('logout')} className='border-b-2 flex items-center gap-2 p-2 rounded-sm  hover:border-white border-blue-200'>
            logout
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            </Link>
        </span>
     </div>
        </div>
    )
}

export default NavDasd
