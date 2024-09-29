"use server"

import { db } from "@/lib/prisma"



export const Verify = async (data) => {
    try {
        
    
   const userve = await db.user.update({
    where:{
        uuid:data
    },
    data:{
        isverified:true
    }
    
}) 
return true
} catch (error) {
        console.log(error);
        return false
        
    }
}