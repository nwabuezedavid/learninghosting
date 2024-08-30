"use client"
import { createContext, useContext, useState } from "react";



export const sitedtailcontext = createContext(null)

const Sitedetail = ({children}) => {
    const [datax, setsitename] = useState("Naxux Invest LTD")
    const [ address, setaddress] = useState("4th floor, 315 Work Avenue Building, 257, 16th Cross, 5th Main Rd, Sector 6, HSR Layout, Bengaluru, Karnataka, 560102")
    const [sitep, introduction] = useState("The easiest investment you'll ever Registered with FIU-India and fully compliant by Indian and European standards Registered with FIU-India and fully compliant by Indian and European standards make,100% compliant Registered with FIU-India and fully compliant by Indian and European standards with expert support just one call away ")
  return (
<sitedtailcontext.Provider  value={{datax,sitep,address}}>
  {children}
</sitedtailcontext.Provider>
  )
}

export default Sitedetail



export const UseSitedetail = () => {
  const sitevalue = useContext(sitedtailcontext) 
  
  
  if (sitevalue) return sitevalue
}
