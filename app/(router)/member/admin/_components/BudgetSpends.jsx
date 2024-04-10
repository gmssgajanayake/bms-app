'use client'
import React from 'react'
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {CalendarIcon} from "lucide-react";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {cn} from "@/lib/utils"
import {Calendar} from "@/components/ui/calendar"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {format} from "date-fns";
import GlobalApi from "@/app/_utils/GlobalApi";

let budgetBalance = 0

const formSchema = z.object({
    reason: z.string().min(2, {
        message: "Reason is required.",
    }),
    description: z.string().min(0, {
        message: "Desc is required.",
    }).optional(),
    date: z.date(),
    price: z.string().min(1, {
        message: "Enter valid price",
    }).refine((value) => parseFloat(value) > 0 && parseFloat(value) <= budgetBalance, {
        message: "Price must be greater than 0 and less than or equal to " + budgetBalance,
    }),
})


function formatDatePrevious(inputDate) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(inputDate);

    // Extract date components
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Format the date in the previous format
    return `${month} ${day}, ${year}`;
}



function BudgetSpends({balance,statusOfBudget,budgetId}) {

    budgetBalance = balance
    let isEnabled = balance > 0 && statusOfBudget

    const form = (useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            reason: '',
            description: '',
            price: '',
            date: ''
        }
    }))

    const router = useRouter()

    async function createBudgetSpends(reason, price,date,budgetId,description)
    {
        balance-=price;
        await GlobalApi.createBudgetSpend(reason, price,date,budgetId,description,balance).then(resp => {
            router.refresh()
        }).catch(error => {
            console.log(error)
        })
    }


    const onSubmit = (data) => {
        createBudgetSpends(data.reason, data.price,formatDatePrevious(data.date),budgetId,data.description)
    }


  return (
      <div className={'grid gap-6 bg'}>
          <div className={' grid grid-cols-1 items-center  text-gray-800  '}>
              <div className={'bg-gray-100 p-10 flex flex-col gap-2 rounded-xl '}>
                  <div
                      className="mx-auto grid grid-cols-1  items-center gap-6">
                      <h1 className={'font-bold text-[25px] lg:text-[30px] '}>
                          Expenses Update
                      </h1>
                      <div className={""}>
                          <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                  <FormField
                                      control={form.control}
                                      name="reason"
                                      render={({field}) => (
                                          <FormItem className={" lg:flex"}>
                                              <FormControl>
                                                  <Input className={'border-none '}
                                                         placeholder="Reason" {...field} />
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
                                              <FormControl>
                                                  <Input className={'border-none '}
                                                         placeholder="Description" {...field} />
                                              </FormControl>
                                              <FormMessage/>
                                          </FormItem>
                                      )}
                                  />

                                  <div className={'grid gap-4 grid-cols-1 lg:grid-cols-2'}>
                                      <FormField
                                          control={form.control}
                                          name="price"
                                          render={({field}) => (
                                              <FormItem className={" lg:flex"}>
                                                  <FormControl>
                                                      <Input  type={'number'} className={'border-none '}
                                                             placeholder="Price LKR : " {...field} />
                                                  </FormControl>
                                                  <FormMessage/>
                                              </FormItem>
                                          )}
                                      />
                                      <FormField
                                          control={form.control}
                                          name="date"
                                          render={({field}) => (
                                              <FormItem className={" lg:flex"}>
                                                  <FormControl>
                                                      <Popover>
                                                          <PopoverTrigger asChild>
                                                              <FormControl>
                                                                  <Button
                                                                      variant={"outline"}
                                                                      className={cn(
                                                                          "w-[240px] pl-3 text-left font-normal",
                                                                          !field.value && "text-muted-foreground"
                                                                      )}
                                                                  >
                                                                      {field.value ? (
                                                                          format(field.value, "PPP")
                                                                      ) : (
                                                                          <span>Pick a date</span>
                                                                      )}
                                                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                  </Button>
                                                              </FormControl>
                                                          </PopoverTrigger>
                                                          <PopoverContent className="w-auto p-0" align="start">
                                                              <Calendar
                                                                  mode="single"
                                                                  selected={field.value}
                                                                  onSelect={field.onChange}
                                                                  disabled={(date) =>
                                                                      date > new Date() || date < new Date("1900-01-01")
                                                                  }
                                                                  initialFocus
                                                              />
                                                          </PopoverContent>
                                                      </Popover>

                                                  </FormControl>
                                                  <FormMessage/>
                                              </FormItem>
                                          )}
                                      />
                                  </div>

                                  <div className={'flex-col gap-10  p-4 rounded'}>
                                      <div className={'md:flex items-center  p-4 lg:p-0  gap-4  justify-between'}>
                                          <h1 className={'text-l font-bold'}></h1>
                                          <div
                                              className={'flex-col gap-4 justify-between items-center  w-full lg:w-1/3 '}>
                                              {
                                                    isEnabled ? <Button
                                                        className={' bg-black pl-16 pr-16 hover:text-black w-full text-white hover:bg-gray-300'}
                                                        type="submit">Submit</Button>:
                                                        <Button disabled
                                                            className={' bg-black pl-16 pr-16 w-full text-white'}
                                                            type="submit">Submit</Button>
                                              }

                                          </div>
                                      </div>

                                  </div>

                              </form>
                          </Form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default BudgetSpends