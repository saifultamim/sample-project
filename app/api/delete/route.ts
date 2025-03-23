import prisma from "@/helpers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
try{
   const id = await request.json()
    const Edit = await prisma.user.delete({
       where:{
       id:id
       }
          
      });
  
    return NextResponse.json({result:Edit})
}catch(err){
    return NextResponse.json({error:err})
}
}