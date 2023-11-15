import { create } from "zustand";


type useBurger = {
    isOpen: boolean,
    setIsOpen: () => void
}

export const useBurger = create<useBurger>((set) => ({
    isOpen : false,
    setIsOpen: () => set(state => ({isOpen: !state.isOpen}))
}))