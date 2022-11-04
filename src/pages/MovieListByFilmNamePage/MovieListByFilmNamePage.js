import {MovieCardPageByGenre} from "../MovieCardByGenre/MovieCardByGenre";
import {useSelector} from "react-redux";
import MoviesList from "../../components/MoviesList/MoviesList";

const MovieListByFilmNamePage = () => {

    const {arrFilmsByName} = useSelector(state => state['movieReducer']);

    return (
        <div>
            {arrFilmsByName.map(movie => <MovieCardPageByGenre key={movie.id} movie={movie}/>)}'
            <div>
                <MoviesList/>
            </div>
        </div>
    );
};

export {MovieListByFilmNamePage};
