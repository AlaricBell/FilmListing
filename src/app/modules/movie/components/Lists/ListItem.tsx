import "./ListItem.scss"
import { MovieProps } from "../../types/MovieTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useMemo, useState } from "react";
import ListInfo from "./ListInfo";
import ListEdit from "./ListEdit";
import { useMovieStore } from "@/app/store/movieStore";
import { useModalStore } from "@/app/store/modalStore";
import classNames from "classnames";

type ListProps = {
    movie: MovieProps
    index: number
}

const ListItem = ({movie, index}: ListProps) => {
    const setMovie = useMovieStore((state) => state.setMovie)
    const deleteMovie = useMovieStore((state) => state.deleteMovie)
    const setSelectedMovieIndex = useMovieStore((state) => state.setSelectedMovieIndex)
    const selectedMovieIndex = useMovieStore((state) => state.selectedMovieIndex)
    const setIsOpen = useModalStore((state) => state.setIsOpen)
    const setModalAction = useModalStore((state) => state.setAction)
    const setModalContent = useModalStore((state) => state.setContent)
    const isEdit = useMovieStore((state) => state.isEdit)
    const setIsEdit = useMovieStore((state) => state.setIsEdit)
    const filter = useMovieStore((state) => state.filter)
    const [currentMovie, setCurrentMovie] = useState<MovieProps>(movie)

    const handleEdit = useCallback(() => {
        if(!isEdit) {
            setSelectedMovieIndex(index)
            setIsEdit()
        }
    }, [currentMovie, isEdit])

    const handleSave = useCallback(() => {
        setIsEdit()
        setMovie(currentMovie)
    }, [currentMovie])

    const handleDelete = useCallback(() => {
        if(!isEdit) {
            setSelectedMovieIndex(index)
            setModalAction((deleteMovie))
            setIsOpen();
            setModalContent(`Are you sure, you want to delete '${movie.title}'?`)
        }
    }, [currentMovie, isEdit, movie])

    const isActive = useMemo(() => isEdit && index === selectedMovieIndex, [selectedMovieIndex, isEdit])
    const isFiltered = useMemo(() => filter === Number.MAX_SAFE_INTEGER || filter === movie.ageRestriction, [movie, filter])

  return isFiltered ? (
        <li className="list-item">
            {isActive ? <ListEdit currentMovie={currentMovie} setCurrentMovie={setCurrentMovie}/> : <ListInfo movie={movie}/>}
            <div className="list-actions">
                {isActive ? <div className="list-action" onClick={handleSave}><FontAwesomeIcon icon={faCheck} /></div> :
                <div className={classNames({disabled: !isActive && isEdit},"list-action")} onClick={handleEdit}><FontAwesomeIcon icon={faEdit} /></div>}
                <div className={classNames({disabled: isEdit},"list-action")} onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></div>
            </div>
        </li>
  ): null;
};

export default ListItem;