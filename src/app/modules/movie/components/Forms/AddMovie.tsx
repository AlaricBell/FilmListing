'use client';

import './AddMovie.scss';
import { MovieProps } from "../../types/MovieTypes";
import { useMovieStore } from '@/app/store/movieStore';
import { useCallback, useState } from 'react';
import { AgeRestriction } from '../../enums/restrictionEnum';
import { produce } from 'immer';
import { useRouter } from 'next/navigation';

const AddMovie = () => {
    const router = useRouter()
    const addMovie = useMovieStore((state) => state.addMovie)
    const [movie, setMovie] = useState<MovieProps>({
        title: "",
        description: "",
        ageRestriction: AgeRestriction.GeneralAudience,
    })

    const setTitle = useCallback((title: string) => setMovie(produce(movie, draft => {
        draft.title = title
    })), [movie])

    const setDescription = useCallback((description: string) => setMovie(produce(movie, draft => {
      draft.description = description
    })), [movie])

    const setRestriction = useCallback((restriction: number) => setMovie(produce(movie, draft => {
      draft.ageRestriction = restriction
    })), [movie])

    const handleSave = useCallback(() => {
        addMovie(movie)
        router.push('/', { scroll: false })
    }, [movie])



    return (
        <section className="form-container">
            <div className="form-group">
                <input className="form-title" type="text" value={movie.title} onChange={e => setTitle(e.target.value)}/>
                {/* NOTE: Should be in a custom dropdown component instead */}
                {/* TODO: Stop being lazy */}
                <select value={movie.ageRestriction} name="" className="form-restriction" onChange={e => setRestriction(Number(e.target.value))}>
                    <option value={AgeRestriction.GeneralAudience}>{AgeRestriction.GeneralAudience}</option>
                    <option value={AgeRestriction.ParentalGuidence}>{AgeRestriction.ParentalGuidence}</option>
                    <option value={AgeRestriction.SafeForKids}>{AgeRestriction.SafeForKids}</option>
                    <option value={AgeRestriction.AdultsOnly}>{AgeRestriction.AdultsOnly}</option>
                </select>
            </div>
            <textarea className="form-description" value={movie.description} onChange={e => setDescription(e.target.value)}></textarea>
            <button className="form-btn" onClick={handleSave}>Save</button>
        </section>
    );
  };
  
  export default AddMovie;