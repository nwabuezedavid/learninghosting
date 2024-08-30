
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
   <header class="bg-white z-[999]">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <Link href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">datax</span>
        <img class="h-8 w-auto"  src="/logo.png" alt="norejd" />
      </Link>
    </div>
    <div class="flex lg:hidden z-20">
      <button type="button" onClick={()=>settem(true)} class="-m-2.5 inline-flex items-center cursor-pointer justify-center rounded-md p-2.5 text-gray-700">
        <span class="sr-only" >Open main menu</span>
        <svg class="h-6 w-6" fill="none"  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
    

      <Link href="/?#plansection" class="text-sm font-semibold leading-6 text-gray-900 hover:border-b">Investment Plan</Link>
      <Link href="/contact" class="text-sm font-semibold leading-6 text-gray-900 hover:border-b hover:border-red-300 ">Contact Us </Link>
      <Link href="/about" class="text-sm font-semibold leading-6 text-gray-900 hover:border-b hover:border-red-300 ">About Us </Link>
      <Link href="/faq" class="text-sm font-semibold leading-6 text-gray-900 hover:border-b hover:border-red-300 ">FAQ</Link>
      <Link href="/policy" class="text-sm font-semibold leading-6 text-gray-900 hover:border-b hover:border-red-300 ">Policy</Link>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end ">
      <Link href="/login" class="text-sm font-semibold  text-white px-2 rounded  leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
    </div>
  </nav>
  <div class="lg:hidden" role="dialog" aria-modal="true">
    <div class="fixed inset-0 z-10"></div>
    <div class={`fixed ${!tom? "hidden":'media z-50'}   media inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
      <div class="flex items-center justify-between">
        <Link href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">{datax}</span>
          <img class="h-8 w-auto" src="/logo.png" alt="norejd" />
        </Link>
        <button type="button" onClick={()=>settem(false)} class="-m-2.5 z-50 rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <div class="-mx-3">
          
            
            </div>
            <Link onClick={()=>settem(false)} href="/?#plansection" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Investment Plan</Link>
            <Link onClick={()=>settem(false)} href="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">about US</Link>
            <Link onClick={()=>settem(false)} href="/contct" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact -US</Link>
            <Link onClick={()=>settem(false)} href="/faq" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">FAQ</Link>
            <Link onClick={()=>settem(false)} href="/policy" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Policy</Link>
          </div>
          <div class="py-6">
            <Link href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default HheaderFind
