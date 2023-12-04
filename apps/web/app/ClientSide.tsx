"use client"

import { useState,useEffect } from "react"
import { trpc } from "./trpc"

export default function ClientSide(){
    const [greeting,setGreeting]=useState("")
    useEffect(()=>{
        trpc.hello.query({name:"RaseOfficial"}).then(res=>{
            setGreeting(res)
        })
    })
    return <div>I am client side: {greeting}</div>
}