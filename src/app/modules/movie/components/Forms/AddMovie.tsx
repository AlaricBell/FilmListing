'use client';

import './AddMovie.scss';
import { MovieProps } from "../../types/MovieTypes";
import { useMovieStore } from '@/app/store/movieStore';
import { useState } from 'react';
import { AgeRestriction } from '../../enums/restrictionEnum';

const AddMovie = () => {
    const addMovie = useMovieStore((state) => state.addMovie)
    const movie = useState<MovieProps>({
        title: "",
        description: "",
        ageRestriction: AgeRestriction.GeneralAudience,
    })
    return (
        <section className="list-container">
            
        </section>
    );
  };
  
  export default AddMovie;