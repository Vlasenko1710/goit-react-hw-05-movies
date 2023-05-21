import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchMovie from 'components/SearchMovie';
import TrendingList from 'components/TrendingList';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as API from 'search/SearchApi';
import { NoResult } from 'components/Reviews/Reviews.styled';
import { Container } from 'components/App/App.styled';
function notifyWarn() {
  toast.warn("Sorry, we didn't find anything", {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}

function notifyError() {
  toast.error('You have not entered anything in the search', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('title') ?? '';
  const [title, setTitle] = useState(() => movieTitle ?? '');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (!movieTitle) return;
    const fetch = async () => {
      try {
        const res = await API.searchMovieTitle(movieTitle);
        if (res.total_results === 0) {
          notifyWarn();
          return;
        }
        setMovies(res.results);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieTitle]);

  const onSubmit = e => {
    e.preventDefault();
    if (!title.trim()) {
      notifyError();
      return;
    }
    const nextParams = title !== '' ? { title } : {};
    setSearchParams(nextParams);
  };
  const onChange = e => {
    setTitle(e.target.value);
  };
  return (
    <main>
      <Container>
        <SearchMovie title={title} onChange={onChange} onSubmit={onSubmit} />
        {movies.length > 0 ? (
          <TrendingList items={movies} />
        ) : (
          <NoResult>Please, enter your request.</NoResult>
        )}
        <ToastContainer />
      </Container>
    </main>
  );
}
