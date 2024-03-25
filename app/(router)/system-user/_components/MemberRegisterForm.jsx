'use client'
import {Button} from "@/components/ui/button"
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
        console.log(clerkId)
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
                    <Button onClick={() => redirectPath = "/create-boarding"} type="submit">Create a Boarding</Button>
                    <Button onClick={() => redirectPath = "/find-boarding"} type="submit">Find a Boarding</Button>

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
    )
}


export default MemberRegisterForm