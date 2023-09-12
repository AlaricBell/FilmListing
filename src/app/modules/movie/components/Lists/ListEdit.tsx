import "./ListItem.scss"
import { MovieProps } from "../../types/MovieTypes";
import { useCallback, useState } from "react";
import { produce } from "immer";
import { AgeRestriction } from "../../enums/restrictionEnum";

type EditProps = {
    currentMovie: MovieProps
    setCurrentMovie: (movie: MovieProps) => void
}

const ListEdit = ({currentMovie, setCurrentMovie}: EditProps) => {
  const {title, description, ageRestriction} = currentMovie

  const setTitle = useCallback((title: string) => setCurrentMovie(produce(currentMovie, draft => {
      draft.title = title
  })), [])

    const setDescription = useCallback((description: string) => setCurrentMovie(produce(currentMovie, draft => {
      draft.description = description
  })), [])

    const setRestriction = useCallback((restriction: number) => setCurrentMovie(produce(currentMovie, draft => {
      draft.ageRestriction = restriction
  })), [])

  return (
    <div className="list-info">
        <div className="list-header">
            <input className="list-title-edit" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <select value={ageRestriction} name="" className="list-restriction-edit" onChange={e => setRestriction(Number(e.target.value))}>
                <option value={AgeRestriction.GeneralAudience}>{AgeRestriction.GeneralAudience}</option>
                <option value={AgeRestriction.ParentalGuidence}>{AgeRestriction.ParentalGuidence}</option>
                <option value={AgeRestriction.SafeForKids}>{AgeRestriction.SafeForKids}</option>
                <option value={AgeRestriction.AdultsOnly}>{AgeRestriction.AdultsOnly}</option>
            </select>
        </div>
        <input className="list-description-edit" type="text" value={description}  onChange={e => setDescription(e.target.value)}/>
    </div>
  );
};

export default ListEdit;