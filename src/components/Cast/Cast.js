import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'search/SearchApi';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { cast } = await API.castMovie(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieId]);
  return (
    <div>
      {cast.length ? (
        <ul>
          {cast.map(item => (
            <li key={item.cast_id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                    : `https://picsum.photos/200/300?random}`
                }
                alt={item.character ? item.character : item.original_name}
                width="150"
              />
              <div>
                <span>Name</span>
                <span>{item.name ?? item.original_name ?? 'Name'}</span>
                <span>Character</span>
                <span>
                  {' '}
                  {item.character
                    ? item.character
                    : item.original_name ?? 'Character'}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results</p>
      )}
    </div>
  );
}
