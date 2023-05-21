import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from 'components/App/App.styled';
import {
  Movie,
  MoviesList,
  LinkMovie,
  MovieWrapper,
  Text,
} from './TrendingList.styled';
export default function TrendingList({ items }) {
  const location = useLocation();
  let count = 0;

  return (
    <Container>
      <MoviesList>
        {items.map(item => {
          return (
            <Movie key={item.id}>
              <LinkMovie to={`/movies/${item.id}`} state={{ from: location }}>
                <MovieWrapper>
                  <div>
                    <img
                      loading="lazy"
                      src={
                        item.poster_path
                          ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                          : `https://picsum.photos/200/300?random=${(count += 1)}`
                      }
                      alt={item.title ?? item.name ?? item.original_title}
                      width="300"
                      height="300"
                    />
                  </div>
                  <Text>
                    {item.title ?? item.name ?? item.original_title ?? 'Title'}
                  </Text>
                </MovieWrapper>
              </LinkMovie>
            </Movie>
          );
        })}
      </MoviesList>
    </Container>
  );
}

TrendingList.propTypes = {
  items: PropTypes.array.isRequired,
};
