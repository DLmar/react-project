import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import MoviePage from "./pages/MoviePage/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";


export default function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/movies'} element={<MoviePage/>}/>
                    <Route path={'/movies/:id'} element={<MovieDetailsPage/>}/>

                </Route>
            </Routes>
        </div>
    );
}