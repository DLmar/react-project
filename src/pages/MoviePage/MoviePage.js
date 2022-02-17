import MoviesList from "../../components/MoviesList/MoviesList";
import css from './MoviePage.module.css'

export default function MoviePage() {
    return (
        <div className={css.wrap}>
            <MoviesList/>
        </div>
    );
}