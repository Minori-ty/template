import { create } from 'zustand'

interface TypeCatStore {
    cats: {
        bigCats: number
        smallCats: number
    }
    addCat: (num: number) => void
    removeCat: (num: number) => void
}

export const useCatStore = create<TypeCatStore>()((set) => ({
    cats: {
        bigCats: 0,
        smallCats: 0,
    },
    addCat: (num: number) => {
        set((state) => {
            return {
                cats: {
                    smallCats: state.cats.smallCats + num,
                    bigCats: state.cats.bigCats + num,
                },
            }
        })
    },
    removeCat: (num: number) => {
        set((state) => {
            return {
                cats: {
                    bigCats: state.cats.bigCats + num,
                    smallCats: state.cats.smallCats - num,
                },
            }
        })
    },
}))
