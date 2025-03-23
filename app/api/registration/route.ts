import prisma from "@/helpers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
try{
   const {name,email,password,location} =await request.json()
    console.log('route .ts',name,email)
    const createUser = await prisma.user.createMany({
        data:[
            {
             username: "Alice ",
              email: "alice@example.com",
              password: "password123",
              location: "New York USA"
            },
            {
                username: "Bob Smiths",
              email: "bob@example.com",
              password: "securePass456",
              location: "London UK"
            },
            {
                username: "Charlies Brown",
              email: "charlie@example.com",
              password: "charliePass789",
              location: "Sydney Australia"
            },
            {
                username: "David Le",
              email: "david@example.com",
              password: "davidPass321",
              location: "Toronto Canada"
            },
            {
                username: "Ema Watson",
              email: "emma@example.com",
              password: "emmaPass654",
              location: "Paris France"
            }
          ]
          
      });
  
    return NextResponse.json({result:createUser})
}catch(err){
    return NextResponse.json({error:err})
}
}