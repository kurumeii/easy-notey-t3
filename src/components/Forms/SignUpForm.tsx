import { useToast } from "@/hooks/useToast"
import { SignUpForm, SignUpSchema } from "@/lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { Icons } from "../Icons/Icons"
import { Button } from "../Ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../Ui/form"
import { Input } from "../Ui/input"

const SignUpForm = () => {
  const { toast } = useToast()
  const { push } = useRouter()
  const [isRavelio, setRavelio] = useState(false)
  const form = useForm<SignUpForm>({
    resolver: zodResolver(
      SignUpSchema.superRefine(({ password, rePassword }, ctx) => {
        if (rePassword !== password) {
          ctx.addIssue({
            code: "custom",
            path: ["rePassword"],
            message: "Password is not match",
          })
        }
      })
    ),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      rePassword: "",
    },
  })

  const onSubmitFn: SubmitHandler<SignUpForm> = (data) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={(ev) => void form.handleSubmit(onSubmitFn)(ev)}>
        <div className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input
                    className=""
                    autoComplete="on"
                    type="text"
                    placeholder="Your name"
                    id="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="email"
                  className='after:ml-0.5 after:text-destructive after:content-["*"]'
                >
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className=""
                    autoComplete="on"
                    type="email"
                    placeholder="Your email"
                    id="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="password"
                  className='after:ml-0.5 after:text-destructive after:content-["*"]'
                >
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      className=" pr-12"
                      autoComplete="on"
                      placeholder={isRavelio ? "Your password" : "********"}
                      type={isRavelio ? "text" : "password"}
                      id="password"
                      {...field}
                    />
                    <span
                      className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-3"
                      onClick={() => setRavelio((prev) => !prev)}
                    >
                      {isRavelio ? (
                        <Icons.unlock className="h-5 w-5" />
                      ) : (
                        <Icons.lock className="h-5 w-5" />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="confirm-password"
                  className='after:ml-0.5 after:text-destructive after:content-["*"]'
                >
                  Confirm password
                </FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      className=" pr-12"
                      autoComplete="on"
                      placeholder={
                        isRavelio ? "Your confirm password" : "********"
                      }
                      type={isRavelio ? "text" : "password"}
                      id="confirm-password"
                      {...field}
                    />
                    <span
                      className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-3"
                      onClick={() => setRavelio((prev) => !prev)}
                    >
                      {isRavelio ? (
                        <Icons.unlock className="h-5 w-5" />
                      ) : (
                        <Icons.lock className="h-5 w-5" />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <Button
            type="submit"
            className="w-full"
            // disabled={createNewAcc.isLoading}
          >
            Submit
            {/* {createNewAcc.isLoading && (
              <Icons.loading className="ml-2 h-5 w-5 animate-spin" />
            )} */}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default SignUpForm
