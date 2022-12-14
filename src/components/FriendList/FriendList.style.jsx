import styled from 'styled-components';

export const List = styled.ul`
    margin-bottom: 20px;
`; 

export const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 55px;
  padding: 20px;
  margin: auto;
  margin-bottom: 10px;
  font-size: 28px;
  color: rgb(31, 99, 14);
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 1px 3px rgba(0, 0, 0, 0.12);
  &:hover {
      box-shadow: 0px 2px 1px rgba(21, 21, 21, 0.492), 0px 1px 1px rgba(0, 0, 0, 0.536),
      0px 1px 3px rgba(0, 0, 0, 0.551);
  }    
`;

export const Status = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 15px 0 15px;
    background-color: ${(prop)=>(prop.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
    border-radius: 10px;
    margin: 10px;
`;

export const Name = styled.p`
    font-size: 24px;
    font-weight: 600;
`;
