import "./ListItem.scss"
import { MovieProps } from "../../types/MovieTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import ListInfo from "./ListInfo";
import ListEdit from "./ListEdit";

type ListProps = {
    movie: MovieProps
    setMovies: (movies: MovieProps[]) => void
}

const ListItem = ({movie, setMovies}: ListProps) => {
    const [isEdit, setIsEdit] = useState<boolean>()
    const [isDelete, setIsDelete] = useState<boolean>()

  return (
    <>
        <li className="list-item">
            {isEdit ? <ListEdit movie={movie} setMovies={setMovies}/> : <ListInfo movie={movie}/>}
            <div className="list-actions">
                {isEdit ? <div className="list-action" onClick={() => setIsEdit(prev => !prev)}><FontAwesomeIcon icon={faCheck} /></div> :
                <div className="list-action" onClick={() => setIsEdit(prev => !prev)}><FontAwesomeIcon icon={faEdit} /></div>}
                <div className="list-action" onClick={() => {}}><FontAwesomeIcon icon={faTrash} /></div>
            </div>
        </li>
    </>
  );
};

export default ListItem;