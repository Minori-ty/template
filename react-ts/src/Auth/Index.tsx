import { Navigate } from 'react-router-dom'
import useToken from '../store'

interface IProps {
    children: JSX.Element
}

export default function Auth({ children }: IProps) {
    const token = useToken((state) => state.token)
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to="/login" replace />
    }
}
