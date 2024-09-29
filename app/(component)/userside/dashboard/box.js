'use client'
import React, { useEffect } from 'react'

export const Firststep = () => {

const allbostarry = [
  {'id':'1','icon':' bi-door-open', 'name':'Total withdraw', 'bal':'0' },
  {'id':'2','icon':' bi-buildings', 'name':'Total invest', 'bal':'0' },
  {'id':'3','icon':'bi-boxes', 'name':'Total deposit', 'bal':'0' },
  {'id':'4','icon':'bi-compass', 'name':'Current invest', 'bal':'0' },

]


  useEffect(() => {
  
   
  }, [])
  return (
    
    <section className='w-full flex p-2 gap-12 items-top    max-md:flex-col  '>
<main className=' max-md:w-full relative flex w-fit min-w-[340px] flex-grow overflow-hidden h-[200px]  shadow-md rounded-md items-center justify-center p-4 gap-2'>
    <p className='absolute w-1/3 h-1/2 -bottom-10 -right-20 rounded-lg skew-x-3 rotate-45 bg-red-300 '></p>
    <p className='absolute w-1/3 h-1/2 -bottom-10 -left-20 rounded-lg skew-x-3 rotate-45 bg-red-300 '></p>
    <div className="flex flex-col items-left w-full z-40">
        <span className='w-[100%] flex items-center max-md:justify-start justify-center p-2'>
        <b className='w-12 h-12 bg-[#f47575d0] rounded-full'></b>
        <b className='w-12 h-12 bg-[#1198ff62] rounded-full -ml-2'></b>

        </span>
        <h4 className='text-[90%] font-bold capitalize mt-[12%]'>Account balance</h4>
        <strong className="text-3xl text-gray-500">0.00 USD</strong>
    </div>
    <div className='w-2/3  z-40'>  
      <img src="/dd.jpg" alt="" className="w-[129px] rounded-full h-[129px]"  />

    </div>
</main>
<main className='flex w-full gap-3 cursor-grab sm:w-[90%] flex-wrap hidbar max-sm:overflow-auto scroll-m-3 '> 
  <div className="flex w-full gap-3 max-sm:*:m-3 cursor-grab  max-sm:w-fit sm:flex-wrap ">

{allbostarry.map((e,id)=><Childbox key={e.id} value={e}/>)}
  </div>

</main>


    </section>
  )
}

export const SecBox = () =>{
  const ss2adds = [
    {'icon':'bi-cash', 'name':'Current plan', 'bal':'' },
    {'icon':'bi-arrow-left-right', 'name':'Pending invest', 'bal':'' },
    {'icon':'bi-wallet2', 'name':'Pending withdraw', 'bal':'' },
    {'icon':'bi-person', 'name':'Refferal earn', 'bal':'' },
  
  ]
  return (
    <>
    <main className='flex w-full flex-wrap gap-2 items-center justify-center flex-row items-center p-3 '>
      
    {ss2adds.map((e,id) =><div key={id} className="w-[300px] max-md:flex-grow h-fit p-3  gap-2 capitalize bg-blue-50 flex flex-col justify-center min-h-fit">
        <b className={`bi ${e.icon ? e.icon :'bi bi-wallet'  }   w-fit h-fit p-4 bg-gradient-to-tr to-blue-300 from-cyan-900 shadow-md rounded-md text-white text-3xl shadow-cyan-500`}></b>
        <stroneg className="font-bold">{e.name || 'current plan'}</stroneg>
        <big>{e.amount || 'N/A'}</big>
      </div> )}
      
      
       
    </main>
    </>
  )
}




export const Childbox = ({value}) => {
 const {icon,name,bal,  } = value
  return (
    <section className="w-[370px] shadow-lg  cursor-grab max-w-[700px] max-sm:shadow max-sm:bg-blue-100 sm:flex-grow  overflow-hidden  capitalize  relative flex h-[100px]  bg-[url('/.png')] bg-blend-saturation bg-opacity-50    bg-contain bg-blend-color p-3 shadow-md gap-3  shadow-blue-200  ">
      <span className='w-1/3 z-50 shadow-md shadow-cyan-300 bg-gray-50 rounded-lg flex items-center justify-center'>
<i className={`font-extrabold text-[60px] text-red-500 bi ${icon || ' bi-wallet2 text-blue-300'}`}></i>

      </span>
<div className="resdchide flex-grow z-50 flex w-2/3 flex-col ">
    <p>{name}</p>
    <strong>{bal}.00 USD</strong>
</div>
<big className='absolute bg-gray-100 w-[20%] shadow-xl shadow-cyan-100 h-[70%]  rotate-12  -top-10 left-0'></big>
<big className='absolute bg-[#f47575d0] shadow-xl shadow-black rounded-xl w-[20%] h-[70%]  rotate-12   -bottom-10 right-0'></big>
    </section>
  )
}
