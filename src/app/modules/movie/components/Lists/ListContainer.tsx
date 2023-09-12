'use client';

import './ListContainer.scss';
import ListItem from "./ListItem";
import { MovieProps } from "../../types/MovieTypes";
import { useMovieStore } from '@/app/store/movieStore';

const ListContainer = () => {
    const movies = useMovieStore((state) => state.movies)
    return (
      <ul className="list-container">
        {movies.map((item: MovieProps, index: number) => <ListItem movie={item} key={index} index={index}/>)}
      </ul>
    );
  };
  
  export default ListContainer;