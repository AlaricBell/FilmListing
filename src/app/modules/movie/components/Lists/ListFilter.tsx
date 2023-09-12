import "./ListFilter.scss"
import { MovieProps } from "../../types/MovieTypes";
import { AgeRestriction } from "../../enums/restrictionEnum";
import { useMovieStore } from "@/app/store/movieStore";
import { useCallback } from "react";
import classNames from "classnames";

type FilterProps = {
    movie: MovieProps
}

const ListFilter = () => {
    const setFilter = useMovieStore((state) => state.setFilter)
    const filter = useMovieStore((state) => state.filter)
    const restrictionArray: number[] = Object.keys(AgeRestriction).filter((key: any) => isNaN(Number(AgeRestriction[key]))).map(value => Number(value));

    return (
        <section className="filter">
            <div className={classNames({active: filter === Number.MAX_SAFE_INTEGER}, "filter-item")} onClick={() => setFilter(Number.MAX_SAFE_INTEGER)}>All</div>
            {restrictionArray.map((value, index) => (<div className={classNames({active: filter === value}, "filter-item")} key={index} onClick={() => setFilter(value)}>{value}+</div>))}
        </section>
  );
};

export default ListFilter;