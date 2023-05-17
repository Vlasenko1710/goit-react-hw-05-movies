import  Loading  from 'components/Loading';
import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function Layout () {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </nav>
            </header>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </>
    );
};
