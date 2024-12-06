import { create } from "zustand"

export interface Book {
  title: string
  coverURL: string
  author: string
}

interface BookState {
  book: Book | null,
  page: number,
  score: number,
  setBook: (value: any) => void,
}

const useBookState = create<BookState>()((set, get) => (
  {
    book: null,
    page: 0,
    score: 0,
    setBook: (value) => {set({book: value})}
  })
)

export default useBookState;