import { useLocation, useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

type NavigateFunction = (route: string) => void
interface UseRouterFunctions {
    navigateFunc: NavigateFunction
}

const useRouter = (): UseRouterFunctions => {
    const navigate = useNavigate()
    const location = useLocation()

    const navigateFunc = useCallback((route: string) => {
        if (route !== location.pathname) {
            navigate(route)
        }
    }, [])

    return { navigateFunc }
}

export default useRouter
