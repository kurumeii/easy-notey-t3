import { Dialog, DialogContent, DialogTrigger } from "@/components/Ui/dialog"
import SignInForm from "../Forms/SignInForm"
import { Icons } from "../Icons/Icons"
import { Button } from "../Ui/button"

const MenuBar = () => {
  return (
    <>
      <div className="flex h-full flex-col items-start justify-start gap-5 font-semibold md:flex-row md:items-center md:justify-center">
        <div>Features</div>
        <div>Tech</div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              Get started <Icons.signIn className="ml-2 h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <SignInForm />
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default MenuBar
