import styled from "styled-components";

export const Table = styled.table`
    color: black;
    width: 500px;
    border-collapse: collapse;
    border: 1px solid grey;
    text-align: center;
    margin: auto auto;
`;
  
export const Header = styled.th`
    border: 1px solid grey;
    background-color: #119eb1;
    color: white;
    font-weight: 600;
    font-size: 15px;
    padding: 5px 0 5px 0;
`;

export const Row = styled.td`
    border: 1px solid grey;
    font-weight: 300;
    font-size: 13px;
    padding: 5px 0 5px 0;
`;

export const Column = styled.tr`
    &: nth-child(even) {
    background-color: 'rgb(188, 229, 245)';
  }
`;