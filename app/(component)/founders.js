"use client"
import {useState} from 'react'

const Founders = () => {
    const  arry = [
        {"image":"/found/1.jpg", "name":"Prince Arora", "postion":"Co-Founder & CEO at Mudrex (YC-W19)"},
        {"image":"/found/2.jpg", "name":"Edul Patel", "postion":"Co-Founder at Mesh Finance, JediSwap and Mudrex (YC-W19)"},
        {"image":"/found/3.jpg", "name":"Alankar Saxena", "postion":"Co-Founder & CTO at Mudrex (YC-W19)"},
        {"image":"/found/4.jpg", "name":"Rohit Goyal", "postion":"Co-Founder at Mesh Finance, JediSwap and Mudrex (YC-W19)"},
    ]
    return (
        <div className=" flex w-full ite justify-center flex-wrap">
{arry?.map((e, id) => <Foundersss key={id} value={e}/>)}
     
   </div>
    )
}

export default Founders



export const Foundersss = (value) => {
    const {name, postion, image}=value.value
    return (
        <div className="relative text-left">
        <div className="flex flex-col  bg-background-medium p-6  w-[291px] h-2xl relative ">
            <div className="flex flex-col gap-1 h-[100px]">
                <h2 className="h5-20-sb z-[50]">{name}</h2>
                <p className="text-14-r max-w-[171px] z-[50]">{postion}</p>
               
                </div>
            <img loading="lazy" width="232" height="290" decoding="async" data-nimg="1" 
            className=" h-[120px] h-[200px] flex top-[5.75rem] "
             src={image} title="color: transparent;" />
             </div></div>

    )
}



