import prisma from "@/helpers";
import { NextResponse } from "next/server";



export async function GET() {
try{
    const getProduct = await prisma.product.findMany({})
    console.log('++++ ',getProduct)
    return NextResponse.json({result:getProduct})
}catch(err){
    return NextResponse.json({error:err})
}
}