import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const MoviesList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  margin: 0;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: center;
`;

export const LinkMovie = styled(Link)`
  text-decoration: none;
  color: #242424;
  transition: color 250ms ease-in-out;
  &:hover {
    color: green;
  }
`;

export const MovieWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 250ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 15px green;
  }
`;

export const Text = styled.p`
  padding: 10px;
  margin: 0;
  background-color: #f8f8f8;
`;
