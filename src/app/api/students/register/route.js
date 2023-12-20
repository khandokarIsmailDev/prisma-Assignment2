import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";


export async function POST (req,res){
    try {

        const reqBody = await req.json()
        const prisma = new PrismaClient()

        let result = await prisma.user.create({
            data:reqBody
        })

        return NextResponse.json({status:"success",data:result})
    }catch(error){
        return NextResponse.json({status:"fail",data:error.toString()})
    }
}