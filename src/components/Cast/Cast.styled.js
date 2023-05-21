import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const CastPerson = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 4px #242424;
  max-width: 150px;
  color: #242424;
  font-size: 14px;
`;

export const CastTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

export const CastDesr = styled.span`
  font-weight: 300;
`;

export const CastName = styled.span`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  margin: 5px 0;
`;
