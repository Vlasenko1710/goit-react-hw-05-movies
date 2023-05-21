import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'search/SearchApi';
import { NoResult } from 'components/Reviews/Reviews.styled';
import { CastList, CastPerson, CastTextContainer, CastDesr, CastName } from './Cast.styled';
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
        <CastList>
          {cast.map(item => (
            <CastPerson key={item.cast_id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                    : `https://picsum.photos/200/300?random}`
                }
                alt={item.character ? item.character : item.original_name}
                width="150"
              />
              <CastTextContainer>
                <CastDesr>Name</CastDesr>
                <CastName>{item.name ?? item.original_name ?? 'Name'}</CastName>
                <CastDesr>Character</CastDesr>
                <CastName>
                  {' '}
                  {item.character
                    ? item.character
                    : item.original_name ?? 'Character'}
                </CastName>
              </CastTextContainer>
            </CastPerson>
          ))}
        </CastList>
      ) : (
        <NoResult>No results</NoResult>
      )}
    </div>
  );
}
