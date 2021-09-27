import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
`;

export const Table = styled.table`
    border-collapse: collapse;
    width: 60%;
    text-align: center;
    color: #fff;

`;

export const Td = styled.td`
    font-weight: bold;
    font-size: 35px;
    border-bottom: 2px solid rgb(245, 245, 245);
    padding: 10px;
    text-transform: uppercase;
`;

export const Tr = styled.tr`
    border-bottom: 1px solid rgb(217, 217, 217);
    padding: 10px;
`;

export const Th = styled.th`
    font-weight: normal;
    font-size: 25px;
    padding: 10px;
`;

export const Date = styled.p`
    margin-right: 20px;
    text-align: end;
    font-weight: normal;
    font-size: 20px;
    color: #fff;
`;