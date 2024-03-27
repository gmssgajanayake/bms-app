'use client'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Textarea} from "@/components/ui/textarea";



const formSchema = z.object({
    id: z.string().min(2, {
        message: "ID name must be at least 2 characters.",
    }),
    firstName: z.string().min(2, {
        message: "First Name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last Name must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    address: z.string().min(2, {
        message: "Address must be at least 2 characters.",
    }),
    contact: z.string().min(10, {
        message: "Please enter a valid contact number",
    })

})

export function FindBoardingForm({firstName,lastName,email,address,contact,id}) {

    const form = (useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            contact: contact,
        }
    }))


    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <main
            className="z-10  flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <div className="z-10 mx-auto grid w-full max-w-6xl gap-2">
                <h1 className="text-3xl font-semibold">Find New Boarding</h1>
            </div>
            <div
                className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            </div>
            <div className={"lg:pl-24"}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="boardingName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Boarding Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Give a name for your boarding" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="adminId"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Admin ID</FormLabel>
                                    <FormControl>
                                        <Input disabled placeholder="Admin ID" {...field} />
                                    </FormControl>
                                    <FormDescription className={'text-red-600'}>
                                        You will be the admin of this boarding currently however, you can change it
                                        later with your boarding members
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Give your boarding an address" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea  {...field} placeholder="Type your message for boarding members."
                                                   id="message"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className={'flex gap-4 justify-between'}>
                            <div></div>
                            <Button type="submit">Request to join</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </main>
    )
}


export default FindBoardingForm