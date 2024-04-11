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
import {Textarea} from "@/components/ui/textarea"


import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import GlobalApi from "@/app/_utils/GlobalApi";
import {useRouter} from "next/navigation";


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

    const router = useRouter();

    // form default values
    const form = (useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            boardingName: "",
            adminId: clerkId,
            address: "",
            description: "",
        }
    }))

    // create new boarding
    async function createBoarding(data) {
        await GlobalApi.createNewBoarding(data.boardingName, data.address, data.description, clerkId).then(resp => {
            console.log(resp)
            router.push('/member/dashboard')
        }).catch(error => {
            console.log(error.message)
        })
    }


    // submit form data
    const onSubmit = (data) => {
        createBoarding(data);
    }


    return (
        <main
            className="z-10  flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <div className="z-10 mx-auto grid w-full max-w-6xl gap-2">
                <h1 className="text-3xl font-semibold">Create New Boarding</h1>
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
                            <Button type="submit">Create a new boarding</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </main>
    )
}


export default BoardingRegisterForm