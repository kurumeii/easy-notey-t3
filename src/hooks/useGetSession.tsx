import { useSession } from "next-auth/react"

export default function useGetSession() {
  const { data, status, update } = useSession()
  return {
    isLoading: status === "loading",
    user: data?.user,
    updateSession: update,
  }
}
