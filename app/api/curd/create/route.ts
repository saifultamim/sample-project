import prisma from "@/helpers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
try{
   const {name,brand,category,policy,color,price,weight,state,available,description} =await request.json()

    const createProduct = await prisma.product.create({
        data:{
            name,brand,category,policy,color,price,weight,state,available,description
        }
          
          
      });
  
    return NextResponse.json({result:createProduct})
}catch(err){
    return NextResponse.json({error:err})
}
}