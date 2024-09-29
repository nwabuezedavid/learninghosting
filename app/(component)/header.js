
"use client"
import  Image from 'next/image';
import Link from 'next/link';
import { UseSitedetail } from './context/sitedetail';
import { useState,useEffect } from 'react';

 const HheaderFind = () => {
  const { datax } = UseSitedetail()
  const [tom , settem] =useState(false)
  useEffect(()=>{
console.log(tom);


  },[tom])
  return (
   <header className="bg-white z-[999]">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <Link href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">{datax}</span>
        <img className="h-8 w-auto"  src="/logo.png" alt="norejd" />
      </Link>
    </div>
    <div className="flex lg:hidden z-20">
      <button type="button" onClick={()=>settem(true)} className="-m-2.5 inline-flex items-center cursor-pointer justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only" >Open main menu</span>
        <svg className="h-6 w-6" fill="none"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
    

      <Link href="/?#plansection" className="text-sm font-semibold leading-6 text-gray-900 hover:border-b">Investment Plan</Link>
      <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:border-b hover:border-red-300 ">Contact Us </Link>
      <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:border-b hover:border-red-300 ">About Us </Link>
      <Link href="/faq" className="text-sm font-semibold leading-6 text-gray-900 hover:border-b hover:border-red-300 ">FAQ</Link>
      <Link href="/policy" className="text-sm font-semibold leading-6 text-gray-900 hover:border-b hover:border-red-300 ">Policy</Link>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
      <Link href="/login" className="text-sm font-semibold  text-red-500 px-2 rounded  leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
    </div>
  </nav>
  <div className="lg:hidden" role="dialog" aria-modal="true">
    <div className={`fixed ${!tom? "hidden":' fixed inset-0 z-10'} fixed inset-0 z-10`}></div>
    <div className={`fixed ${!tom? "hidden":'media z-50'}   media inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
      <div className="flex items-center justify-between">
        <Link href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">{datax}</span>
          <img className="h-8 w-auto" src="/logo.png" alt="norejd" />
        </Link>
        <button type="button" onClick={()=>settem(false)} className="-m-2.5 z-50 rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Close menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <div className="-mx-3">
          
            
            </div>
            <Link onClick={()=>settem(false)} href="/?#plansection" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Investment Plan</Link>
            <Link onClick={()=>settem(false)} href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">about US</Link>
            <Link onClick={()=>settem(false)} href="/contct" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact -US</Link>
            <Link onClick={()=>settem(false)} href="/faq" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">FAQ</Link>
            <Link onClick={()=>settem(false)} href="/policy" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Policy</Link>
          </div>
          <div className="py-6">
            <Link href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default HheaderFind
