import styled from 'styled-components';

export const Container = styled.div`
    max-width: 980px;
    margin: 30px auto;
    padding: 10px 5px;
    background: #ffffff;
    // border: 1px solid #5C2226;
    border-radius: 7px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    i{
        margin: 0 10px;
    }    
`;


export const Button = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin: 30px 0px;

    a { 
        display: block;
        background: #5C2226;
        padding: 10px 50px;
        cursor: pointer;
        color: #fff;
        border-radius: 30px;
        text-decoration: none;
    }
`;




