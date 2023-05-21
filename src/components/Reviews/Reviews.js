import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'search/SearchApi';
import { ReviewWrapper, ReviewList, Review, TextContainer, NoResult, Author } from './Reviews.styled';
export default function Reviews () {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    let count = 0;

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await API.reviewsMovie(movieId);
                setReviews(res.results);
                return;
            } catch (error) {
                console.log(error);
            }
        };
        fetch();
    }, [movieId]);

    return (
        <ReviewWrapper>
            {reviews.length !== 0 ? (
                <ReviewList>
                    {reviews.map(item => (
                        <Review key={item.id}>
                            <img
                            src={
                  item.author_details.avatar_path
                    ? item.author_details.avatar_path.includes('http')
                      ? `https://picsum.photos/200/300?random=${(count += 1)}`
                      : `https://image.tmdb.org/t/p/original${item.author_details.avatar_path}`
                    : `https://picsum.photos/200/300?random=${(count += 1)}`
                }
                alt={item.author}
                width="100"
                            />
                            <TextContainer>
                                <Author>
                                     {item.author ?? item.author_details.username ?? 'Author'}
                                </Author>
                                <span>{item.content ?? 'No comments'}</span>
                            </TextContainer>
                       </Review> 
                    ))}
                </ReviewList>
            ) : (
                    <NoResult>No result</NoResult>
            )}
        </ReviewWrapper>
    )
};