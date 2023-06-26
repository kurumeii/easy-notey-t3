import { signIn } from "next-auth/react"
import { useState } from "react"
import SignInForm from "../Forms/SignInForm"
import SignUpForm from "../Forms/SignUpForm"
import { Icons } from "../Icons/Icons"
import { Button } from "../Ui/button"

type FormType = "SIGNIN" | "SIGNUP"

const AuthModal = () => {
  const [formType, setFormType] = useState<FormType>("SIGNIN")

  return (
    <>
      {formType === "SIGNIN" ? <SignInForm /> : <SignUpForm />}
      <div className="my-6">
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
      <div className="mt-6 flex justify-center gap-2 px-2 text-xs text-muted-foreground">
        {formType === "SIGNIN" ? (
          <>
            <p
              className="cursor-pointer underline"
              onClick={() =>
                setFormType((prev) => (prev === "SIGNIN" ? "SIGNUP" : "SIGNIN"))
              }
            >
              Create an account
            </p>
          </>
        ) : (
          <>
            Already has an account ?
            <p
              className="cursor-pointer underline"
              onClick={() =>
                setFormType((prev) => (prev === "SIGNIN" ? "SIGNUP" : "SIGNIN"))
              }
            >
              Sign in now
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default AuthModal
