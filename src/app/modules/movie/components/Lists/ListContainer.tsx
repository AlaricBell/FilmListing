'use client';

import './ListContainer.scss';
import ListItem from "./ListItem";
import { MovieProps } from "../../types/MovieTypes";
import { useState } from "react";

const ListContainer = () => {
    const [movies, setMovies] = useState([
        {title: "The Witcher", description: "Season 1 was ok", ageRestriction: 12},
        {title: "The Witcher", description: "Season 1 was ok", ageRestriction: 12},
        {title: "The Witcher", description: "Season 1 was ok", ageRestriction: 12},
        {title: "The Witcher", description: "Season 1 was ok", ageRestriction: 12},
      ])
      
    return (
      <>
          <ul className="list-container">
            {movies.map((item: MovieProps, index: number) => <ListItem movie={item} setMovies={setMovies} key={index}/>)}
          </ul>
      </>
    );
  };
  
  export default ListContainer;