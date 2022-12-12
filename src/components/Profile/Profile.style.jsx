import styled from 'styled-components';

export const Card = styled.div` 
  width: 250px;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  border: solid 1px #89a3c3;
  &:hover{
   box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
     0px 1px 3px rgba(0, 0, 0, 0.12);
  }
`;

export const Description = styled.div`
  background-color: #97a2ae;
`;

export const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  margin: auto;
  background-color: #f3f6f9;
`;

export const NameCard = styled.p`
  font-size: 18px;
  color: #333333;
  font-weight: 700;
  margin-top: 30px;
`;

export const StatsList = styled.ul `
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  background-color: #f3f6f9;
  border-radius: 0 0 5px 5px;
`;

export const Item = styled.li` 
  padding-bottom: 22px;
  line-height: 1.2;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #d8e0ea;
  width: 85px;
  color: #97a2ae;
  padding-top: 22px;
  font-size: 12px;
  display: flex;
`;
