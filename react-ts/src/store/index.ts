import { create } from 'zustand'

interface TypeToken {
    token: string
    setToken: (token: string) => void
}

const useToken = create<TypeToken>()((set) => ({
    // 定义状态
    token: '',
    // 定义修改状态的方法
    setToken: (token) =>
        set(() => ({
            token: token,
        })),
}))

export default useToken
