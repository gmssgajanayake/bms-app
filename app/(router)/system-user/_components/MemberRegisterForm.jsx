'use client'
//import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {useClerk} from "@clerk/clerk-react";
import Link from "next/link"

import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// import { Switch } from "@/components/ui/switch"

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]






import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import GlobalApi from "@/app/_utils/GlobalApi";
import {useRouter} from "next/navigation";
import {Checkbox} from "@/components/ui/checkbox";


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


export function MemberRegisterForm({firstName, lastName, email, address, contact, clerkId}) {

    const router = useRouter();
    const {signOut} = useClerk();
    let redirectPath;


    async function deleteSystemUser(clerkId) {
        console.log(clerkId)
        await GlobalApi.deleteSystemUserByClerkId(clerkId).then(resp => {
            console.log(resp)
            //router.push('/home')
        }).catch(error => {
            console.log(error.message)
        })
    }

    async function updateSystemUser(clerkId, address, contact) {
        if(contact===""){
            contact=null
        }
        await GlobalApi.updateSystemUserByClerkId(clerkId, address, contact).then(resp => {
            router.push(resp.updateSystemUser.id != null ? redirectPath : "/system-user")
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
    }

    const setRedirectPath = (path) => {
        redirectPath = path
    }

    return (
        <main
            className=" flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <div className="mx-auto grid w-full max-w-6xl gap-2">
                <h1 className="text-3xl font-semibold">Settings</h1>
            </div>
            <div
                className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                {/*<nav className="grid gap-4 text-sm text-muted-foreground">*/}
                {/*    <Link href="#" className="font-semibold text-primary">*/}
                {/*        General*/}
                {/*    </Link>*/}
                {/*    <Link href="#">Security</Link>*/}
                {/*    <Link href="#">Integrations</Link>*/}
                {/*    <Link href="#">Support</Link>*/}
                {/*    <Link href="#">Organizations</Link>*/}
                {/*    <Link href="#">Advanced</Link>*/}
                {/*</nav>*/}


            </div>

            <div >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="clerkId"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>System User ID</FormLabel>
                                    <FormControl>
                                        <Input disabled placeholder="User ID" {...field} />
                                    </FormControl>
                                    {/*<FormDescription>*/}
                                    {/*    This is your public display name.*/}
                                    {/*</FormDescription>*/}
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input disabled placeholder="First Name" {...field} />
                                    </FormControl>
                                    {/*<FormDescription>*/}
                                    {/*    This is your public display name.*/}
                                    {/*</FormDescription>*/}
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input disabled placeholder="Last Name" {...field} />
                                    </FormControl>
                                    {/*<FormDescription>*/}
                                    {/*    This is your public display name.*/}
                                    {/*</FormDescription>*/}
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type={'email'} disabled placeholder="Email" {...field} />
                                    </FormControl>
                                    {/*<FormDescription>*/}
                                    {/*    This is your public display name.*/}
                                    {/*</FormDescription>*/}
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
                                        <Input placeholder="Address" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        You can change your address here, when you creat or find a boarding
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="contact"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Contact</FormLabel>
                                    <FormControl>
                                        <Input type={'number'} placeholder="Contact" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        You can change your contact details here, when you create or find a boarding
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className={'flex gap-4'}>
                            <Button onClick={() => redirectPath = "/create-boarding"} type="submit">Create a
                                Boarding</Button>
                            <Button onClick={() => redirectPath = "/find-boarding"} type="submit">Find a
                                Boarding</Button>

                            <Button onClick={() => signOut(() => {
                                deleteSystemUser(clerkId).then(res => {
                                    router.push("/home")
                                }, err => {
                                    console.log(err)
                                })
                            })} type="submit">Delete Account</Button>
                        </div>

                    </form>
                </Form>


            </div>
        </main>


    )
}


export default MemberRegisterForm