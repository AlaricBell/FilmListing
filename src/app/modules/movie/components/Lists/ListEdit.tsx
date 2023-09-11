import "./ListItem.scss"
import { MovieProps } from "../../types/MovieTypes";
import { useState } from "react";

type ListProps = {
    movie: MovieProps
    setMovies: (movies: MovieProps[]) => void
}

const ListEdit = ({movie, setMovies}: ListProps) => {
    const [title, setTitle] = useState<string>(movie.title)
    const [description, setDescription] = useState<string>(movie.description)
    const [restriction, setRestriction] = useState<number>(movie.ageRestriction)

  return (
    <div className="list-info">
        <div className="list-header">
            <input className="list-title-edit" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <select value={restriction} name="" className="list-restriction-edit" onChange={e => setRestriction(Number(e.target.value))}>
                <option value={18} selected={restriction === 18}>18</option>
                <option value={16} selected={restriction === 16}>16</option>
                <option value={12} selected={restriction === 12}>12</option>
                <option value={6} selected={restriction === 6}>6</option>
            </select>
        </div>
        <input className="list-description-edit" type="text" value={description}  onChange={e => setDescription(e.target.value)}/>
    </div>
  );
};

export default ListEdit;