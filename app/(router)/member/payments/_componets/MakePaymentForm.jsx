'use client'
import React from 'react'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useClerk} from "@clerk/clerk-react";
import GlobalApi from "@/app/_utils/GlobalApi";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Badge} from "@/components/ui/badge";


const formSchema = z.object({
    contact: z.string().min(1, {
        message: "Please enter valid price",
    }).refine((value) => parseFloat(value) > 0, {
        message: "Please enter valid price"
    }),
})


function MakePaymentForm({budgetId,memberId}) {

    const router = useRouter();
    const {signOut} = useClerk();
    let redirectPath;

    const form = (useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            contact: "1000.00",
        }
    }))

    async function makeMemberPayment(price,budgetId,memberId) {
        await GlobalApi.makeMemberPayment(price,budgetId,memberId).then(
            ()=> router.refresh()
        ).catch(error=>{
            console.log(error)
        })
    }


    const onSubmit = (data) => {
        makeMemberPayment(parseFloat(data.contact).toFixed(2),budgetId,memberId)
        form.reset();
        router.refresh()
    }

    return (
        <div
            className="z-10 flex flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <div
                className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <Badge variant="outline" className={'justify-center items-center p-2'}>Budget&nbsp;ID&nbsp;:&nbsp;{budgetId}</Badge>
            </div>
            <div className={"lg:pl-24"}>
                <Form  {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="contact"
                            render={({field}) => (
                                <FormItem className={"  justify-center items-center grid grid-cols-1"}>
                                    <div className={'lg:flex lg:items-center'}>
                                        <FormLabel
                                            className={"lg:w-1/6 lg:flex lg:items-center text-lg  font-bold"}>Price </FormLabel>
                                        <div className={'w-full flex justify-center items-center'}>
                                            <h1>LKR&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h1>
                                            <FormControl>
                                                <Input type={'number'} placeholder="Enter price" {...field} />
                                            </FormControl>
                                        </div>
                                    </div>
                                    <FormMessage/>
                                </FormItem>

                            )}
                        />
                        <div className={'flex-col flex gap-4 rounded'}>
                            <div className={'md:flex items-center  p-4 lg:p-0  gap-4  justify-between'}>
                                <h1 className={'text-l font-bold'}></h1>
                                <div
                                    className={'flex-col gap-4  justify-between items-center pb-4 w-full lg:w-1/3 '}>
                                    <Button className={' bg-black hover:text-black w-full text-white hover:bg-gray-300'}
                                            onClick={() => redirectPath = "/create-boarding"} type="submit">Make
                                        your Payment</Button>
                                </div>
                            </div>

                        </div>

                    </form>
                </Form>
            </div>
        </div>
    )
}

export default MakePaymentForm