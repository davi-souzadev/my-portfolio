import { useNavigate } from "react-router-dom"

export function useRouter() {
  const navigate = useNavigate()

  function goTo(path: string) {
    navigate(path)
  }

  return { navigate: goTo }
}
