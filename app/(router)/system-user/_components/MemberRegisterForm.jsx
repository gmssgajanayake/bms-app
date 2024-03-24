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



const formSchema = z.object({
    id: z.string().min(2, {
        message: "ID name must be at least 2 characters.",
    }),
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    address: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    contact: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    })

})

export function MemberRegisterForm({firstName,lastName,email,address,contact,id}) {

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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="id"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>System User ID</FormLabel>
                            <FormControl>
                                <Input  disabled placeholder="User ID" {...field} />
                            </FormControl>
                            {/*<FormDescription>*/}
                            {/*    This is your public display name.*/}
                            {/*</FormDescription>*/}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input disabled placeholder="First Name" {...field} />
                            </FormControl>
                            {/*<FormDescription>*/}
                            {/*    This is your public display name.*/}
                            {/*</FormDescription>*/}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input disabled placeholder="Last Name" {...field} />
                            </FormControl>
                            {/*<FormDescription>*/}
                            {/*    This is your public display name.*/}
                            {/*</FormDescription>*/}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input disabled placeholder="Email" {...field} />
                            </FormControl>
                            {/*<FormDescription>*/}
                            {/*    This is your public display name.*/}
                            {/*</FormDescription>*/}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input placeholder="Address" {...field} />
                            </FormControl>
                            <FormDescription>
                               You can change your address here, when you creat or find a boarding
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contact</FormLabel>
                            <FormControl>
                                <Input placeholder="Contact" {...field} />
                            </FormControl>
                            <FormDescription>
                                You can change your contact details here, when you create or find a boarding
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className={'flex gap-4'}>
                    <Button type="submit">Create a Boarding</Button>
                    <Button type="submit">Find a Boarding</Button>
                    <Button type="submit">Delete Account</Button>
                </div>

            </form>
        </Form>
    )
}



export default MemberRegisterForm