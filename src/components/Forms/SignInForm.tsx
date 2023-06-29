import { useToast } from "@/hooks/useToast"
import { SignInForm, SignInSchema } from "@/lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
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

const SignInForm = () => {
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [isRavelio, setRavelio] = useState(false)
  const { toast } = useToast()
  const { push } = useRouter()
  const form = useForm<SignInForm>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmitFn: SubmitHandler<SignInForm> = async (data) => {
    setIsFormLoading(true)
    const response = await signIn("credentials", {
      ...data,
      redirect: false,
    })
    setIsFormLoading(false)
    if (response?.error) {
      toast({
        title: "Error",
        description: response?.error ?? "Something went wrong",
        variant: "destructive",
      })
    } else if (response?.ok) {
      toast({
        title: "Signin successful",
      })
      void push("/notes")
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={(ev) => void form.handleSubmit(onSubmitFn)(ev)}
          className="space-y-5"
          noValidate
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:ml-0.5 after:text-destructive after:content-["*"]'>
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    autoComplete="on"
                    placeholder="Your email"
                    type="email"
                    className=""
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
                <FormLabel className='after:ml-0.5 after:text-destructive after:content-["*"]'>
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      autoComplete="on"
                      placeholder={isRavelio ? "Your password" : "********"}
                      type={isRavelio ? "text" : "password"}
                      className=" pr-12"
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
          <Button
            type="submit"
            className="w-full text-base"
            disabled={isFormLoading}
          >
            {isFormLoading ? (
              <>
                Submitting...
                <Icons.loading className="ml-2 h-5 w-5" />
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </>
  )
}

export default SignInForm
