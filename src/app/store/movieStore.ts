import { create } from 'zustand'
import { MovieProps } from '../modules/movie/types/MovieTypes'
import { produce } from 'immer'
import { AgeRestriction } from '../modules/movie/enums/restrictionEnum'

interface MovieState {
  movies: MovieProps[]
  selectedMovieIndex: number
  isEdit: boolean
  setIsEdit: () => void
  setSelectedMovieIndex: (index: number) => void
  setMovie: (movie: MovieProps) => void
  addMovie: (movie: MovieProps) => void
  deleteMovie: () => void
}

export const useMovieStore = create<MovieState>()((set) => ({
  movies: [
    {title: "The Witcher Season 1", description: "Season 1 was ok", ageRestriction: AgeRestriction.SafeForKids},
    {title: "The Witcher Season 2", description: "Season 2 wasn't ok", ageRestriction: AgeRestriction.SafeForKids},
    {title: "The Witcher Season 3", description: "Geralt appears a few times", ageRestriction: AgeRestriction.SafeForKids},
    {title: "The Witcher Season 4", description: "Made me unsub", ageRestriction: AgeRestriction.SafeForKids},
  ],
  selectedMovieIndex: 0,
  isEdit: false,
  setIsEdit: () => set((state) => ({ isEdit: !state.isEdit})),
  setSelectedMovieIndex: (index) => set((state) => ({ selectedMovieIndex: index})),
  setMovie: (movie) => set((state) => ({ movies: produce(state.movies, draft => {
      draft[state.selectedMovieIndex].title = movie.title
      draft[state.selectedMovieIndex].description = movie.description
      draft[state.selectedMovieIndex].ageRestriction = movie.ageRestriction
  })})),
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie]})),
  deleteMovie: () => set((state) => ({ movies: produce(state.movies, draft => draft.filter((movie, index) => index !== state.selectedMovieIndex))})),
}))