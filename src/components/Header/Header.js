import {NavLink} from 'react-router-dom'
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
                <NavLink to={'movies'}>MOVIES</NavLink>
                <NavLink to={'genres'}>GENRES</NavLink>
        </div>
    );
};

export {Header};