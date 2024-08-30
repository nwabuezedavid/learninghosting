import React from 'react'

const TexComet = (data) => {
    const {comment, name} = data
    return (
        <span className="w-[250px] flex-col items-center p-2 flex  h-fit p-4 m-2 rounded border shadow-md ">
<h1 className='flex w-full items-center justify-evenly'><b className='font-extrabold font-mono text-[40px] '></b> <strong>{data.data.name || 'shdhdhdhdh'}</strong>  <b className='font-extrabold font-mono text-[40px] '></b></h1>
       <p className='w-full pb-2 '>{data.data.comment }</p>    
        </span>
    )
}

export default TexComet
