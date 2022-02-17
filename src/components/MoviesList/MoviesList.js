import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './MoviesList.module.css';

import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {getAllMovies, setCurrentPage} from "../../store/slices/movies.slice";

export default function MoviesList() {

    let {movies, currentPage} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(currentPage));
    }, [currentPage]);

    const movieArr = movies.results;
    const totalPages = movies.total_pages;

    return (
        <>
            {movieArr?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            <div className={css.button}>

                <div>
                    <button onClick={() => {
                        if (currentPage === 1) {
                            dispatch(setCurrentPage(1))
                        } else {
                            dispatch(setCurrentPage(--currentPage))
                        }

                    }}>Previous
                    </button>
                </div>

                <div className={css.titlePage}>{currentPage}</div>
                <div>
                    <button onClick={() => {
                        if (currentPage === totalPages) {
                            dispatch(setCurrentPage(totalPages));
                        } else {
                            dispatch(setCurrentPage(++currentPage))
                        }
                    }}>Next
                    </button>
                </div>
            </div>
        </>
    );
}