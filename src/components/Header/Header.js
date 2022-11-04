import {NavLink} from 'react-router-dom'
import css from './Header.module.css';




const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <div>
                    <NavLink to={'movies'}>
                        <img src="https://agencia13.es/wp-content/uploads/2021/07/logo-de-cine.jpg" alt="movie-logo"/>
                    </NavLink>
                </div>

            </div>

        </div>

    );
};

export {Header};
