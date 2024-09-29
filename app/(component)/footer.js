"use client"
import Link from 'next/link'
import React from 'react'
import { UseSitedetail } from './context/sitedetail'

const FoTter = () => {
    const {datax,address} = UseSitedetail()
    return (
        <section className='w-full h-fit p-4 flex flex-col bg-[#010129] text-white fex-col  '>
            <div className='w-full h-fit flex  max-md:flex-col '>
               <span className='w-1/2 gap-4 flex flex-col max-md:w-full'>
<img src="logo.png" className='w-12 h-12 ' alt="sd" />
<p>Available on</p>
<Link href="#"  >
<big className='w-fit h-fit p-2 flex min-w-[230px] justify-evenly  gap-3  rounded-md border-2  border-white'>

<p>Download Android</p>
<img src="/footer/playstore-svgrepo-com.svg" alt="norejd" className='w-4 text-white' />
</big>
</Link>
<Link href="#"  >
<big className='w-fit  min-w-[230px]  justify-evenly h-fit p-2 flex  gap-3  rounded-md border-2  border-white'>

<p>Download IOS</p>
<img src="/footer/ss.png" alt="norejd" className='w-4 object-contain text-white' />
</big>
</Link>
<img src="/footer/qr.png" className='w-20 h-20' alt="siteame" />                </span> 
<main className='flex flex-1 w-1/2 max-md:w-full '>
<span className='flex flex-col w-1/2 h-full items-center justify-evenly'>
    <header>LINKS</header>
    <Link href='/about'>
    About Us
    </Link>
    <Link href='/contact'>
    Contact Us
    </Link>
    <Link href='/faq'>
    FAQ
    </Link>
    <Link href='/policy'>
   Policy
    </Link>
</span>
<span className='w-1/2 flex flex-col capitalize  items-center justify-evenly'>
    <header clas>INVESTMENT </header>
    <Link href='/'>
    invest in bitcoin
    </Link>
    <Link href='/'>
    invest in usdt
    </Link>
    <Link href='/'>
    invest in tron
    </Link>
</span>
<span className='w-fit flex flex-col capitalize  items-center justify-center'>

    <Link href='/'>
    Email Us : support@gmail.com
    </Link>
    <Link href='/'>
    Phone  : +1(673)-342-(637)
    </Link>
   
</span></main>
            </div>
        <div className='flex flex-col w-full mt-[7%] '>
            <p className='flex w-full p-2'>
             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"></path></svg>
            2024 {datax} Inc.</p>
            <h4>Address: {address}</h4>
        </div>
        </section>
    )
}

export default FoTter
