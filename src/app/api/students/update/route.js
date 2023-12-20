import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";


export async function POST(req,res){
    try{
        const{searchParams} = new URL(req.url)
        const id = parseInt(searchParams.get('id'))
        const reqBody = await req.json()
        const prisma = new PrismaClient()
        const result = await prisma.user.update({
            where:{id:id},
            data:reqBody
        })

        return NextResponse.json({status:"success",data:result})
    }catch(error){
        return NextResponse.json({status:"fail",data:error.toString()})
    }
}