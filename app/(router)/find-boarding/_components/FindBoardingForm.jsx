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

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"


import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import * as React from "react"
import {Check, ChevronsUpDown, Search} from "lucide-react"

import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import GlobalApi from "@/app/_utils/GlobalApi";
import {useRouter} from "next/navigation";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
// import * as frameworks from "zod";
import {cn} from "@/lib/utils";
import {CommandList} from "cmdk";
import {log} from "next/dist/server/typescript/utils";
import {useEffect} from "react";


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


var frameworks = [
    // {
    //     value: "next.js",
    //     label: "Next.js",
    // },
    // {
    //     value: "sveltekit",
    //     label: "SvelteKit",
    // },
    // {
    //     value: "nuxt.js",
    //     label: "Nuxt.js",
    // },
    // {
    //     value: "remix",
    //     label: "Remix",
    // },
    // {
    //     value: "astro",
    //     label: "Astro",
    // },
]


export function FindBoardingForm({clerkId}) {

    const router = useRouter();
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")



    const form = (useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            boardingName: "",
            adminId: "",
            address: "",
            description: "",
        }
    }))


    async function getAllBoardings(){
        await GlobalApi.getAllBoardings().then(resp=>{
            frameworks=resp.boardings
            //console.log(frameworks)
        }).catch(error=>{
            console.log(error)
        })
    }


    const onSubmit = (data) => {
        console.log(data)
    }

    const setValueFields = (framework) => {
        form.setValue("boardingName", framework?.name)
        form.setValue("adminId", framework?.members[0]!==null?framework?.members[0].id:'')
        form.setValue("address", framework?.address)
        form.setValue("description", framework?.discription)
    }


    useEffect(() => {
        getAllBoardings();
        //setValueFields(wo);
    });


    return (
        <main
            className="z-10  flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <div className="z-10 mx-auto grid w-full max-w-6xl gap-2">
                <h1 className="text-3xl font-semibold">Find New Boarding</h1>
            </div>

            <div className=" flex mx-auto justify-center items-center w-full max-w-6xl gap-6">
                <Search/>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full justify-between"
                        >
                            {value
                                ? frameworks.find((framework) => {
                                    setValueFields(framework)
                                    return framework.id === value
                                })?.id
                                : "Search ID"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px]  p-0">
                        <Command className="rounded-lg border shadow-md">
                            <CommandInput placeholder="Type a command or search..."/>
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Suggestions">
                                    {
                                        frameworks.map((framework) => (
                                            (framework.availability && framework.members[0] != null) && <CommandItem
                                                key={framework.id}
                                                value={framework.id}
                                                onSelect={(currentValue) => {
                                                    setValue(currentValue === value ? "" : currentValue)
                                                    setOpen(false)
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        value === framework.id ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {framework.id}
                                            </CommandItem>
                                        ))
                                    }
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>

            <div
                className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            </div>
            <div className="z-10 mx-auto grid w-full max-w-6xl gap-2">
                <h1 className="text-2xl text-gray-500 font-semibold">Searched Boarding Details</h1>
            </div>
            <div className={"lg:pl-24"}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="boardingName"
                            render={({field}) => (
                                <FormItem className={" lg:flex"}>
                                    <FormLabel className={"lg:w-1/6 lg:flex lg:items-center"}>Boarding Name</FormLabel>
                                    <FormControl>
                                        <Input disabled className={'border-none'}
                                               placeholder="Selected boarding name" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="adminId"
                            render={({field}) => (
                                <FormItem className={" lg:flex"}>
                                    <FormLabel className={"lg:w-1/6 lg:flex lg:items-center"}>Admin ID</FormLabel>
                                    <FormControl>
                                        <Input className={'border-none'} disabled placeholder="Admin of the selected boarding" {...field} />
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
                                        <Input disabled className={'border-none'}
                                               placeholder=" Boarding address" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({field}) => (
                                <FormItem className={" lg:flex"}>
                                    <FormLabel className={"lg:w-1/6 lg:flex lg:items-center"}>Description</FormLabel>
                                    <FormControl>
                                        <Input  placeholder=" Description" disabled className={'border-none h-[100px]'}  {...field}
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


export default FindBoardingForm

