"use client"
import Link from 'next/link'
import React, { useState } from 'react'

 const Conbinelnk = ({className, mainname , ch1,ch1link, ch2, ch2link, icoin}) => {
  const [open, setopen] = useState(true)
  return (
    <div className={`${className} w-full flex-col  flex  bg-white  `}>
         
        <p onClick={()=>setopen(!open)} className={`flex w-full  h-fit cursor-pointer flex-row-reverse !items-center bg-white
            border-red-100 p-2 justify-start capitalize `}>  
            <i className={`bi  ${!open ?  "bi-chevron-double-down":'bi-chevron-double-right'}`}></i> <p className="flex-grow
              flex items-center justify-center">{mainname || "investment"}</p> 
     
        
        {!icoin ? <>  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </>:<i className={icoin}></i>}
         
          </p>
<main className={`flex flex-col w-full capitalize ${open &&  "hidden"} *:bg-gray-100 gap-2 p-2`}>
<div className='flex  w-full h-fit  items-center'>
        <Link className='flex w-full h-fit p-2 justify-between px-4 gap-4  ' href={ch1link || '/'}>{ch1 }  
       
        </Link>
        <i className='bi bi-chevron-right'></i>

</div>

<div className='w-full flex items-center '>
      <Link className='flex w-full h-fit p-2 justify-between px-4 gap-4 items-center  ' href={ch2link || "/"}>{ch2 || "history"}  
        </Link>
      <i className='bi bi-chevron-right'></i>
    
</div></main>
    </div>
  )
}
export default Conbinelnk