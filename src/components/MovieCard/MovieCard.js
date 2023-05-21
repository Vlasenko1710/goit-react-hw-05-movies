import PropTypes from 'prop-types';
import { ContentWrapper, ImgThumb, Title } from 'pages/MovieDetails/MovieDetails.styled';
export default function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  const releaseDate = new Date(release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';
  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated';

  if (!title) {
    return 'Unknown';
  }

  return (
    <ContentWrapper>
      <ImgThumb>
        <img
          src={posterUrl}
          alt={title}
          width="300"
          height="450"
          loading="lazy"
        />
      </ImgThumb>
      <div>
        <Title>
          {title ?? 'Name'} ({releaseYear})
        </Title>
        <p>User Score: {userScore}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        {genres && genres.length > 0 && (
          <p>
            {' '}
            <h3>Genres</h3>
            {genres.map(genre => genre.name).join(', ')}
          </p>
        )}
      </div>
    </ContentWrapper>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};
