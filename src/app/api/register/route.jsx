import { NextResponse } from 'next/server'
import prisma from '@/libs/db'
import bcrypt from 'bcrypt'


export async function POST(request) {
  const user = await request.json()
  const userFound = await prisma.user.findUnique({
    where:{
      email: user.email
    }
  })
  if (userFound){
    return NextResponse.json({
      message: "User already exist!"
    },{
      status: 400
    })
  }else{
    const hashedPassword = await bcrypt.hash(user.password,10)    
    const newUser = await prisma.User.create({
      data : {
        username: user.username,
        email: user.email,
        password: hashedPassword
      }
    })
    return NextResponse.json({
      message: "New user registed "
    },{
      status: 200
    })
  }
}

export async function GET() {
    const users = await prisma.User.findMany()
    console.log(users) 
  return NextResponse.json(users)
}



