"use server"

import { db } from "@/lib/prisma"



export const Register = async (data) => {
    try {

        const checjkuser = await db.user.findFirst({
            where: {
                OR: [
                    {

                        username: data.username,
                    },
                    {
                        email: data.email,

                    }
                ]

            },

        })

        if (checjkuser) return { "error": "error" }

        const user = await db.user.create({

            data: {
                username: data.username,
                email: data.email,
                password: data.password,
                firstname: data.fullname,
                lastname: data.lastname,
                isverified: false

            },
           
        })
        const { password, ...userWithoutPassword } = user;
        return user
        return { "USER": user }
    } catch (error) {
        return error
    }

}

export const Login = async (data) => {
    // console.log(data, "kskks______");

    try {
        const user = await db.user.findUniqueOrThrow({
            where: {
                email: data.email,
                password: data.password,
            },
            
            
        })
        
        const { password, ...userWithoutPassword } = user;
        return user
    } catch (error) {
        return false
    }
}


export const resetLogin = async (data) => {

    try {
        const acc = await db.user.update({
            where: {
                uuid: data.uuid
            }
            ,
            data: {
                password: data.password
            }
        })
        return true
    } catch (error) {
        console.log(error);

        return false
    }

} 
export const forpasw = async (data) => {

    try {
        const acc = await db.user.findFirstOrThrow({
            where: {
                email: data.email
            }
         
        })
        return acc
    } catch (error) {
        console.log(error);

        return false
    }

} 