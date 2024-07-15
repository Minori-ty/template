import { Suspense, type ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'
import Auth from '../Auth/Index'
import { Admin, Loading, Login } from './components'

const router: RouteObject[] = [
    {
        path: '/',
        element: lazyLoad(
            <Auth>
                <Admin />
            </Auth>,
        ),
    },
    {
        path: '/login',
        element: lazyLoad(<Login />),
    },
    {
        path: '/loading',
        element: lazyLoad(<Loading />),
    },
]

export default router

function lazyLoad(children: ReactNode): ReactNode {
    return <Suspense fallback={<div>加载中...</div>}>{children}</Suspense>
}
