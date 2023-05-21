import {useState} from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import Loading from 'components/Loading';
import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense } from 'react';

// import { Link } from 'react-router-dom';
import * as API from 'search/SearchApi';
import { useEffect } from 'react';
import { Container } from 'components/App/App.styled';
import { BackLink, LinkMore, LinksWrapper } from './MovieDetails.styled';

export default function MovieDetails() {
    const { movieId } = useParams();
    const location = useLocation();
    const [selectedMovie, setSelectedMovie] = useState({});

    useEffect(() => {
        const fetch = async movieId => {
         try {
             const res = await API.searchMovieId(movieId);
             setSelectedMovie(res);     
            }catch (error) {
        console.log(error);
      }
    };
   fetch(movieId);
    }, [movieId]);
     return (
        <main>
            <Container>
                <BackLink to={location?.state?.from?? '/'}>
                    <span>Back to Movies</span>
                </BackLink>
                
                        <MovieCard movie={selectedMovie} />
                        <hr />
                        <LinksWrapper>
                            <LinkMore to="cast" state={{ from:location?.state?.from?? '/'}}>
                                Cast
                            </LinkMore>
                            <LinkMore to="reviews" state={{ from: location?.state?.from?? '/'}}>
                                Reviews
                            </LinkMore>
                        </LinksWrapper>
                        <Suspense fallback={<Loading />}>
                            <Outlet />
                        </Suspense>
                    
            </Container>
        </main>
    );


 }