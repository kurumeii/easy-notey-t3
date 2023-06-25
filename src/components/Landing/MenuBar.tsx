import { Dialog, DialogContent, DialogTrigger } from "@/components/Ui/dialog"
import useGetSession from "@/hooks/useGetSession"
import { Icons } from "../Icons/Icons"
import AuthModal from "../Modals/AuthModal"
import { Button } from "../Ui/button"
import UserDropDown from "../UserDropdown/UserDropDown"

const MenuBar = () => {
  const { user } = useGetSession()
  return (
    <>
      <div className="flex h-full flex-col items-start justify-start gap-5 font-semibold sm:flex-row sm:items-center sm:justify-center">
        <div>Features</div>
        <div>Tech</div>
        {user ? (
          <UserDropDown />
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-semibold">
                Login <Icons.signIn className="ml-2 h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AuthModal />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </>
  )
}

export default MenuBar
