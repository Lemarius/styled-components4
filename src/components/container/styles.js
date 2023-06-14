import styled from "styled-components";

const StyledContainerWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
`;

const StyledContainer = styled.div`
    width: 560px;
    background-color: white;
    border-radius: 20px;
    border-bottom-right-radius: 150px;
    padding: 50px;

`;

const StyledInputCont = styled.div `
    width: 160px;
    height: 101px;
    display: flex;
    flex-flow: column nowrap;
`;

const StyledTextCont = styled.form `
    width: 728px;
    height: 70px;
    display: flex;
`;

const StyledLabel = styled.label`
    font-size: 16px;
    font-weight: 600;
    color: black;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 2px;
    padding-bottom: 10px;

`;

const StyledInput = styled.input `
    width: 100px;
    font-size: 22px;
    font-weight: 800;
    height: 35px;
    padding-left: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;

    ::placeholder{
        font-weight: 600;
        color: lightgray;
        font-size: 22px;
    }
`;

const StyledSeparator = styled.div`
    width: 728px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`;

const StyledSeparatorLine = styled.div`
    width: 70%;
    height: 1px;
    background-color: gray;
`;

const StyledSeparatorContImg = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: #9B47EE;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease;
    cursor: pointer;

    :hover {
        background-color: black;
    }
`;

const StyledSeparatorImg = styled.img`
    width: 50%;
`;



export {StyledContainerWrapper, StyledContainer, StyledInput, StyledInputCont, StyledLabel, StyledTextCont, StyledSeparator, StyledSeparatorLine, StyledSeparatorContImg, StyledSeparatorImg};