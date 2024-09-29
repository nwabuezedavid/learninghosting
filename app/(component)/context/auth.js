"use client"
import { createContext, useContext, useEffect, useState } from "react";


export const userCuren = createContext()



const UserContext = ({children})=>{
    const [user, setuser] = useState(null)
    const [userdetail,setdetn] = useState(typeof window !== 'undefined' && sessionStorage.getItem('userslogin'))
    function setItemWithExpiration(key, value, expirationMinutes) {
      const now = new Date();
      const item = {
        value: value,
        expiration: new Date(now.getTime() + expirationMinutes * 60000).getTime(), // Calculate expiration timestamp
      };
      sessionStorage.setItem(key, JSON.stringify(item));
    }
    function sremoveItemWithExpiration() {
      
      sessionStorage.removeItem("userslogin");
    }
    
    useEffect(() => {
          if(user !== 'logout' && user){

            setItemWithExpiration('userslogin',user, 30000)
          }else if (user == "logout"){
            sremoveItemWithExpiration()
          }
       
    }, [user])
 
return(

    <>
    <userCuren.Provider value={{user , setuser,userdetail}}>
    {children}
    </userCuren.Provider>
    </>
)
}
export default UserContext


export const Uselogin = () => {
    const uselogind = useContext(userCuren) 
    
    
    if (uselogind) return uselogind
  }







