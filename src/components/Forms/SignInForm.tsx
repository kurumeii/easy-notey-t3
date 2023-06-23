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
  const [isFormLoading, setisFormLoading] = useState(false)
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
    try {
      setisFormLoading(true)
      await signIn("credentials", {
        ...data,
        redirect: false,
      })
      toast({
        title: "Signin successful",
        variant: "default",
      })
      await push("/notes")
    } catch (error) {
      toast({
        title: "Error",
        description: (error as string) ?? "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setisFormLoading(false)
    }
  }

  return (
    <>
      <div className="grid gap-6">
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
                  <FormLabel
                    htmlFor="email"
                    className='after:ml-0.5 after:text-destructive after:content-["*"]'
                  >
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="on"
                      placeholder="Your email"
                      type="email"
                      className=""
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
                        autoComplete="on"
                        placeholder={isRavelio ? "Your password" : "********"}
                        type={isRavelio ? "text" : "password"}
                        className=" pr-12"
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
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="inline-flex flex-1 justify-center gap-2">
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full"
            onClick={() => void signIn("google")}
            type="button"
          >
            <Icons.google className="h-5 w-5" />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full"
            onClick={() => void signIn("github")}
            type="button"
          >
            <Icons.github className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  )
}

export default SignInForm
