import prisma from "@/helpers";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const getUser = await prisma.user.findMany({});
        return NextResponse.json({result:getUser})
    }catch(err){
        return NextResponse.json({error:err})
    }
    }

    export async function POST() {
        try{
    //   const createUser = await prisma.user.create({
    //     data:{
    //         username:'shaiful',
    //         email:'saifultamim38@gmail.com',
    //         password:'12345',
    //         location:'kakrail,Dhaka'
    //     }
    //   })
    //   console.log('create user ',createUser)a
    
    console.log('bakcedn ')
        }catch(error){
            return NextResponse.json({error})
        }
    }