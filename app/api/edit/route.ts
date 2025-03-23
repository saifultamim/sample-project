import prisma from "@/helpers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
try{
   const id = await request.json()
    console.log('response ',id)
    const Edit = await prisma.user.update({
       where:{
       id:id
       },
       data:{
        username:'mahim'
       }
          
      });
  
    return NextResponse.json({result:Edit})
}catch(err){
    return NextResponse.json({error:err})
}
}