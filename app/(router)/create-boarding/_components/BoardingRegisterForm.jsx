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
import { Textarea } from "@/components/ui/textarea"


import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";


const formSchema = z.object({
    boardingName: z.string().min(2, {
        message: "Boarding name is required",
    }),
    adminId: z.string().min(2, {
        message: "Admin id must be at least 2 characters.",
    }),
    address: z.string().min(2, {
        message: "Address is required.",
    }),
    description: z.string().min(0, {
        message: "Description",
    }).optional()
})


export function BoardingRegisterForm({clerkId}) {

    const form = (useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            boardingName: "",
            adminId: clerkId,
            address: "",
            description: "",
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
                    name="boardingName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Boarding Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Give a name for your boarding" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="adminId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Admin ID</FormLabel>
                            <FormControl>
                                <Input disabled placeholder="Admin ID" {...field} />
                            </FormControl>
                            <FormDescription>
                                You will be the admin of this boarding currently however, you can change it later with your boarding members
                            </FormDescription>
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
                                <Input placeholder="Give your boarding an address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea  {...field} placeholder="Type your message for boarding members." id="message" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className={'flex gap-4'}>
                    <Button type="submit">Create a new boarding</Button>
                </div>
            </form>
        </Form>
    )
}



export default BoardingRegisterForm