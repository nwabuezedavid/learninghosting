"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { createContext } from 'react';
import { useContext } from 'react';


export const dashboardtocontext =  createContext(null)

const Dashproverer = ({children}) => {
    const [dog, setdog] = useState(true)
    useEffect(() => {
    }, [dog])
    
 return (
    <dashboardtocontext.Provider value={{dog, setdog}}>
        {children}
    </dashboardtocontext.Provider>
 )
}

export default Dashproverer


export const UsedogContext = () => {
  const m = useContext(dashboardtocontext)
  if (m) return m
}

