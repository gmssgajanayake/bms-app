'use client'
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import { SquareArrowOutUpLeft } from 'lucide-react';
import {useClerk} from "@clerk/clerk-react";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import GlobalApi from "@/app/_utils/GlobalApi";
import {useRouter} from "next/navigation";


const formSchema = z.object({
    clerkId: z.string().min(2, {
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
    }).email({message: "Please enter a valid email"}),

    address: z.string().min(0, {
        message: "Address must be at least 2 characters.",
    }).optional(),
    contact: z.string().min(0, {
        message: "Please enter a valid contact number",
    }).optional()
})


export function MyProfileForm({firstName, lastName, email, address, contact, clerkId}) {

    const router = useRouter();
    const {signOut} = useClerk();
    let redirectPath;


    async function deleteSystemUser(clerkId) {
        console.log(clerkId)
        await GlobalApi.deleteSystemUserByClerkId(clerkId).then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error.message)
        })
    }

    async function updateSystemUser(clerkId, address, contact) {
        if (contact === "") {
            contact = null
        }
        await GlobalApi.updateSystemUserByClerkId(clerkId, address, contact).then(resp => {
            router.refresh()
        }).catch(error => {
            console.log(error.message)
        })
    }

    const form = (useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            clerkId: clerkId,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            contact: contact,
        }
    }))

    const onSubmit = (data) => {
        updateSystemUser(data.clerkId, data.address, data.contact)
        console.log(data)
    }

    const setRedirectPath = (path) => {
        redirectPath = path
    }

    return (
        <main
            className="z-10  flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <div
                className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            </div>

            <div className={"lg:pl-24"}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="clerkId"
                            render={({field}) => (
                                <FormItem className={" lg:flex"}>
                                    <FormLabel className={"lg:w-1/6 lg:flex lg:items-center"}>System User ID</FormLabel>
                                    <FormControl>
                                        <Input className={'border-none '} disabled placeholder="User ID" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({field}) => (
                                <FormItem className={" lg:flex"}>
                                    <FormLabel className={"lg:w-1/6 lg:flex lg:items-center "}>First Name</FormLabel>
                                    <FormControl>
                                        <Input className={'border-none '} disabled
                                               placeholder="First Name" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({field}) => (
                                <FormItem className={" lg:flex"}>
                                    <FormLabel className={"lg:w-1/6 lg:flex lg:items-center"}>Last Name</FormLabel>
                                    <FormControl>
                                        <Input className={'border-none '} disabled placeholder="Last Name" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem className={" lg:flex"}>
                                    <FormLabel className={"lg:w-1/6 lg:flex lg:items-center"}>Email</FormLabel>
                                    <FormControl>
                                        <Input className={'border-none '} type={'email'} disabled
                                               placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({field}) => (
                                <FormItem className={" lg:flex"}>
                                    <FormLabel className={"lg:w-1/6 lg:flex lg:items-center"}>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Address" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="contact"
                            render={({field}) => (
                                <FormItem className={" lg:flex"}>
                                    <FormLabel className={"lg:w-1/6 lg:flex lg:items-center"}>Contact</FormLabel>
                                    <FormControl>
                                        <Input type={'number'} placeholder="Contact" {...field} />
                                    </FormControl>
                                </FormItem>

                            )}
                        />
                        <div className={'flex-col gap-10  p-4 rounded'}>
                            <div className={'md:flex items-center  p-4 lg:p-0  gap-4  justify-between'}>
                                <h1 className={'text-l font-bold'}>To update current account details</h1>
                                <div className={'flex-col gap-4  pt-4 justify-between items-center pb-4 w-full lg:w-1/3 '}>
                                    <Button className={' bg-black hover:text-black w-full text-white hover:bg-gray-300'} onClick={() => redirectPath = "/create-boarding"} type="submit">Update Account</Button>
                                </div>
                            </div>
                            <div className={'flex items-center lg:p-0   xl:mt20  justify-between'}>
                                <h1 className={'text-l text-l font-bold text-red-500'}></h1>
                                <Button className={'sm:w-1/3 bg-red-600 hover:bg-red-600'} onClick={() => signOut(() => {
                                    deleteSystemUser(clerkId).then(res => {
                                        router.push("/home")
                                    }, err => {
                                        console.log(err)
                                    })
                                })} type="submit">   <SquareArrowOutUpLeft /> &nbsp; &nbsp;Left From Boarding</Button>
                            </div>

                        </div>

                    </form>
                </Form>
            </div>
        </main>
    )
}


export default MyProfileForm