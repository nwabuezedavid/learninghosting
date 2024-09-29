"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Conbinelnk from './conbinelnk'
import { UsedogContext } from './context'

const Leftside = () => {

const {dog, setdog} = UsedogContext()

  return (
    <section className={`w-[50vh] h-[100%]   translate-x-[-0vw] z-[90]  transition-all delay-75 flex-grow max-md:fixed max-md:h-[90%] ${ dog && " translate-x-[-100vw] transition-all delay-75  !w-0"} relative max-md:w-[50vw] max-sm:w-[70vw]     flex flex-col justify-between bg-gray-100 border-red-50 rounded items-center overflow-y-auto`}>

<main className="w-full h-full justify-between flex flex-col ">
        <div className='flex flex-col w-full h-full p-2 items-center mt-[12%] gap-2'>
<Link href='/' className='flex w-full transition justify-evenly p-3 items-center flex-row-reverse bg-white'>
<p className='flex-grow  flex items-center justify-center'>

Dashboard 
</p>
<i className='bi bi-bank2 text-2xl'></i>
</Link>

<Conbinelnk ch1="Invest"  className="transition" icoin="bi bi-bar-chart-line-fill text-2xl " />
<Conbinelnk mainname="Fund Account" ch1="Deposit" className="transition" icoin="bi bi-wallet-fill text-2xl "/>
<Link href='/' className='flex w-full justify-evenly p-3 transition flex-row-reverse bg-white'>
<p className='flex-grow  flex items-center justify-center'>

Transfer Funds
</p>
<i className='bi bi-person-plus-fill   font-bold text-2xl' ></i>
 </Link>
<Link href='/' className='flex w-full justify-evenly p-3 transition flex-row-reverse bg-white'>
<p className='flex-grow  flex items-center justify-center'>

Customer Service
</p>
<i className='bi bi-chat-dots-fill   font-bold text-2xl' ></i>
 </Link>
        </div>
<div className="flex w-full h-fit  flex-col gap-2  p-2">
<Link href='/' className='flex w-full transition justify-evenly p-1 items-center flex-row-reverse btn blend text-white  '>
<p className='flex-grow  flex items-center justify-center'>

Upgrade Plan  
</p>
<span className="flex">

<i className='bi bi-arrow-up animate-bounce delay-75 text-red-400 text-2xl'></i>
<i className='bi bi-arrow-down text-cyan-400 animate-bounce text-2xl'></i>

</span>
</Link>
<Link href='/' className='flex w-full transition justify-evenly p-1 items-center flex-row-reverse bg-black text-white  '>
<p className='flex-grow  flex items-center justify-center'>

Logout 
</p>
<i className='bi bi-toggles text-2xl'></i>
</Link>
</div></main>
    </section>
  )
}

export default Leftside