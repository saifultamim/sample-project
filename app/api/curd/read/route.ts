import prisma from "@/helpers";

export default async function GET() {
    try{
        const response = await prisma.product.findMany({})
    return response;
    }catch(error){
        console.log('error')
    }

}