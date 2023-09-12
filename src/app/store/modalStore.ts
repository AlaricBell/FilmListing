import { create } from 'zustand'

interface ModalState {
    isOpen: boolean
    content: string
    action: () => void
    setAction: (action: () => void) => void
    setIsOpen: () => void
    setContent: (text: string) => void
}

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  content: "",
  action: () => {},
  setAction: (action) => set((state) => ({ action: action})),
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen})),
  setContent: (text) => set((state) => ({ content: text}))
}))