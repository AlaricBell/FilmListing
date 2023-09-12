import "./ListItem.scss"
import { MovieProps } from "../../types/MovieTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

type ListProps = {
    movie: MovieProps
}

const ListInfo = ({movie}: ListProps) => {

  return (
    <div className="list-info">
        <div className="list-header">
            <span className="list-title">{movie.title}</span>
            <span className="list-restriction">{movie.ageRestriction}+</span>
        </div>
        <span className="list-description">{movie.description}</span>
    </div>


  );
};

export default ListInfo;