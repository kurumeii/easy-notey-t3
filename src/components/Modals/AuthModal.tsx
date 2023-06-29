import { type BuiltInProviderType } from "next-auth/providers"
import { signIn, type LiteralUnion } from "next-auth/react"
import { useState } from "react"
import SignInForm from "../Forms/SignInForm"
import SignUpForm from "../Forms/SignUpForm"
import { Icons, type IconProps } from "../Icons/Icons"
import { Button } from "../Ui/button"

type FormType = "SIGNIN" | "SIGNUP"
type Oauths = {
  id: LiteralUnion<BuiltInProviderType>
  icon: (props: IconProps) => JSX.Element
}

const oauths: Oauths[] = [
  { id: "google", icon: Icons.google },
  { id: "github", icon: Icons.github },
]

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
      <div className="inline-flex flex-1 justify-evenly gap-2">
        {oauths.map((auth) => (
          <Button
            key={auth.id}
            variant={"outline"}
            size={"icon"}
            className="w-32 rounded-full"
            onClick={() => void signIn(auth.id)}
            type="button"
          >
            <auth.icon className="h-5 w-5" />
          </Button>
        ))}
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
