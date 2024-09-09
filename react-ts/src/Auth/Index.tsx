import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import useToken from '../store'

export default function Auth({ children }: PropsWithChildren) {
    const token = useToken((state) => state.token)
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to="/login" replace />
    }
}
