import React from 'react'

const TexComet = ({data}) => {
    console.log(data.data)
    // const {comment, name} = data.data
    return (
        <span className="w-[250px] flex-col items-center p-2 flex  h-[250px] m-2 rounded border shadow-md ">
<h1 className='flex w-full items-center justify-evenly'><b className='font-extrabold font-mono text-[40px] '>&ldquo</b> <strong>{name}</strong>  <b className='font-extrabold font-mono text-[40px] '>&ldquo</b></h1>
       <p className='w-full pb-2 '>{comment}</p>
        </span>
    )
}

export default TexComet
