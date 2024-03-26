import { SignIn } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
 
export default function Page() {
  return (
     <section className="bg-white">
     <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
     <section className="  bg-cover bg-background bg-no-repeat relative bg-gray-900 flex h-32 items-end  lg:col-span-5 lg:h-full xl:col-span-6">
         <div className="hidden lg:relative lg:block lg:p-0">
             <div className=" bg-black text-white p-12 flex flex-col justify-between">
                 <div >
                         <h1 className="text-4xl font-bold mt-2">BMS</h1>
                     <div className="bg-transparent text-white  flex flex-col justify-between items-center">
                         <Image src={'/sign-up-user.png'} alt={'sing up'} width={300} height={300}/>
                     </div>

                 </div>
                 <div>
                     <p className="text-lg italic">
                         "Create your account now! Join our community for exclusive access and personalized experiences.
                         Signing up takes just a minute"
                     </p>
                     <p className="text-lg font-semibold mt-4">BMS - Boarding Management System</p>
                 </div>
             </div>


         </div>
     </section>

         <main
             className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
         >
             <div className="max-w-xl lg:max-w-3xl">
                 <div className="relative -mt-16 block lg:hidden">
                     <a
                         className="inline-flex size-20 border-4 p-4 border-indigo-200 items-center justify-center rounded-full bg-white text-blue-950  sm:size-20"
                         href="#"
                     >
                         <h1 className="text-headingColor  font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[40px] mt-5 mb-5">
                             BMS
                         </h1>
                     </a>

                     <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                         Welcome to BMS
                     </h1>

                     <p className="mt-4 mb-5 leading-relaxed text-gray-500">
                         Create your account now! Join our community for exclusive access and personalized experiences. Signing up takes just a minute
               </p>
          </div>
          <SignIn/>
          </div>
     </main>
     </div>
     </section>
  )
}
