"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import HomePage from "@/components/HomePage";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Home() {
  const router=useRouter();
  const {user,isLoaded}=useUser();

  useEffect(()=>{
    if(user){
      // console.log(user);
      router.push('/member/dashboard')
    }else{
      isLoaded&&router.push('/home')
    }
  },[user])

  return (
    <div>
        <HomePage/>
        <UserButton />
    </div>
  );
}
