import React from 'react';
import './App.css';
import styled from 'styled-components';
import { StyledBtn } from './component/Button.styled';
import { MyText, TitleText } from './component/Text.styled'; 
import { myTheme } from './styles/Theme.styled';

function App() {
  return (
    <div className='App'>
      <Box>
  
        <TitleText> Headline </TitleText>
        <MyText> Faucibus. Faucibus.
          Sit sit sapien sit tempusrisu ut.
          Sit molestie ornare in venen.
        </MyText>
        <StyledBtn color={myTheme.colors.primary} btnType={"primary"} >
          See more
        </StyledBtn>
        <StyledBtn color={myTheme.colors.secondary} btnType={"outlined"}>
          Save
        </StyledBtn>
      </Box>
    </div>
  );
};

export default App;

const Box = styled.div`
  height: 350px;
  width: 300px;
  top: -317px;
  left: -409px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 50px 1px;
  justify-content: center;
  align-items: center;
  box-shadow: 10%;
  
  button,a {
    cursor: pointer;
  }

@media ${myTheme.media.tablet} {
  flex-direction: column;
} 

`
