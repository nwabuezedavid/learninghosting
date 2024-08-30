"use client"
import {useState} from 'react'

const PplanPsk = (data) => {
    const {min, max,name ,percen,forx } = data.data
    return (
        <span className='w-[220px] flex  flex-grow h-[200px] items-center  justify-center flex-col p-2 bg-slate-50'>
        <h1 className='capitalize'>{name}</h1>
        <small className='flex justify-between w-full '>
          <p>min:</p>
          <p>USD {min}</p>
        </small>
        <small className='flex justify-between w-full '>
          <p>max:</p>
          <p>USD {max}</p>
        </small>
        <small>{percen}% everyday for {forx}day(s)</small>
      </span>
    )
}

export default PplanPsk
