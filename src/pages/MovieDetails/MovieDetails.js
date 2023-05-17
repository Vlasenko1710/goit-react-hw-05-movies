import {useState} from 'react';
import {Link, Outlet, useParams, useLocation } from 'react-router-dom';
import Loading from 'components/Loading';
import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense } from 'react';

// import { Link } from 'react-router-dom';
import * as API from 'search/SearchApi';
import { useEffect } from 'react';

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
            <div>
                <Link to={location?.state?.from?? '/'}>
                    <span>Back to Movies</span>
                </Link>
                
                        <MovieCard movie={selectedMovie} />
                        <hr />
                        <div>
                            <Link to="cast" state={{ from:location?.state?.from?? '/'}}>
                                Cast
                            </Link>
                            <Link to="reviews" state={{ from: location?.state?.from?? '/'}}>
                                Reviews
                            </Link>
                        </div>
                        <Suspense fallback={<Loading />}>
                            <Outlet />
                        </Suspense>
                    
            </div>
        </main>
    );

//   const [data, setData] = useState(null);
//   const [status, setStatus] = useState('');

//   const { id } = useParams();

//   const location = useLocation();
//   const backLink = location?.state?.from ?? '/';

//   useMemo(() => {
//     const fetch = async () => {
//       try {
//         const res = await API.searchMovieId(id);
//         setData(res);
//         setStatus(res.status);
//         return;
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetch();
//   }, [id]);
//     return (
//         <main>
//             <div>
//                 <Link to={backLink}>
//                     <span>Back to Movies</span>
//                 </Link>
//                 {status === 'Released' ? (
//                     <>
//                         <MovieCard data={data} />
//                         <hr />
//                         <div>
//                             <Link to="cast" state={{ from: backLink }}>
//                                 Cast
//                             </Link>
//                             <Link to="reviews" state={{ from: backLink }}>
//                                 Reviews
//                             </Link>
//                         </div>
//                         <Suspense fallback={<Loading />}>
//                             <Outlet />
//                         </Suspense>
//                     </>
//                 ) : (
//                     <p>
//                         Oops, page Not Found :( Please go back and try again later...
//                     </p>
//                 )}
//             </div>
//         </main>
//     );
 }