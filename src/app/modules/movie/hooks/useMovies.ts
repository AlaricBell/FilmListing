import { useState, useEffect } from 'react';

const useMovies = () => {
    const [movies, setMovies] = useState([
        {title: "The Witcher1", description: "Season 1 was ok", ageRestriction: 12},
        {title: "The Witcher2", description: "Season 2 was meh", ageRestriction: 12},
        {title: "The Witcher3", description: "Season 3 was the moment I gave up", ageRestriction: 16},
        {title: "The Witcher4", description: "Season 4 was the moment I unsubbed", ageRestriction: 16},
      ])

  return { movies, setMovies };
}

export default useMovies;