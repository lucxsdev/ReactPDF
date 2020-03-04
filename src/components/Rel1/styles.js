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

export const Button = styled.a`
    margin: 10px 10px;
    display: inline-block;
    padding: 5px 20px;
    background: transparent;
    border: 2px solid #5C2226;
    font-size: 14px;
    color: #5C2226;
    border-radius: 30px;
    text-decoration: none;

    &:hover{
        background: #7AC29A;
        color: #fff;
    }
`;

export const Form = styled.form`
    margin: 5px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`;

export const InputItem = styled.div`
    padding: 0 10px;

     @media (max-width: 600px) {
       margin: 0 auto;
     }

    p {
        font-size: 14px;
        margin: 8px 0;
    }

    select {
        width: 49%;
        box-sizing: border-box;
        padding: 8px 14px;
        border: thin solid #bebebe;
        border-radius: 5px;
        color: #a3a3a3;
    }

    @media (min-width: 600px){
        margin: 0px auto;
    }
`;

export const Input = styled.input`
    width: 265px;
    box-sizing: border-box;
    padding: 10px 18px;
    border: thin solid #bebebe;
    border-radius: 5px;
    color: #757575;
`;

export const TextArea = styled.textarea`
    width: 265px;
    box-sizing: border-box;
    padding: 8px 18px;
    border: thin solid #bebebe;
    border-radius: 5px;
    color: #757575;
`;


export const InputImage = styled.input`
    margin: 20px auto;
    display: inline-block;
    padding: 10px 10px;
    background: transparent;
    font-size: 13px;
    color: black;
    border-radius: 30px;
    text-decoration: none;
`;

export const Central = styled.div`
    margin: 34px auto;
`;

export const Label = styled.label`
    display: "inline-block";
    background: #5C2226;
    padding: 10px 50px;
    cursor: pointer;
    color: #fff;
    border-radius: 30px;
`;




