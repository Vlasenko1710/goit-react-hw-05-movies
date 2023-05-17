import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function TrendingList({ items }) {
  const location = useLocation();
  let count = 0;

  return (
    <div>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                <div>
                  <div>
                    <img
                      loading="lazy"
                      src={
                        item.poster_path
                          ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                          : `https://picsum.photos/200/300?random=${(count += 1)}`
                      }
                      alt={item.title ?? item.name ?? item.original_title}
                      width="200"
                      height="300"
                    />
                  </div>
                  <p>
                    {item.title ?? item.name ?? item.original_title ?? 'Title'}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

TrendingList.propTypes = {
  items: PropTypes.array.isRequired,
};
