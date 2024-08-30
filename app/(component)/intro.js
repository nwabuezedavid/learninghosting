"use client"
import Image from 'next/image';
import { UseSitedetail } from './context/sitedetail'

const SiteInte = () => {
    const {datax,sitep} =  UseSitedetail()
    console.log(datax );
    
  return (
    <main className='w-full h-fit mt-[12%]  max-md:flex-col relative flex'>
<aside className='w-2/3 p-3  max-md:w-full'>
   
    <h1 className='font-bold text-[40px] uppercase max-md:text-[200%] '>Introducing  {datax}  </h1>
    <p className='w-full  text-gray-400'>{sitep}</p>
</aside>
<div className='w-1/3 max-md:w-full'>
   <img src='/kycimg.webp' height={0} width={20}  className='bg-blue-50 w-full h-full'/>
</div>
    </main>
  )
}

export default SiteInte