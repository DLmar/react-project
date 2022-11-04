import {Link} from "react-router-dom";

const MovieCardPageByGenre = ({movie}) => {
    const {title,release_date, overview} = movie

    return (
        <div>
            <Link to={`/movie/${movie.id.toString()}`}>
                <div className={'movieCard'}>
                    <div className={"description"}>
                        <p style={{fontSize: 19, fontFamily: "sans-serif"}}>{title}</p>
                        <p className={"overview"}>{overview}</p>
                        <p className={'date'}>{release_date}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export {MovieCardPageByGenre};
