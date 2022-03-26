import styled from 'styled-components';

export const Card = styled.div `
  background-color: ${(props) => props.theme.cardBackground};
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius:5px;
  border-top: 5px;
  border-style: solid;
  border-color: ${(props) => props.borderTop};
  border-image: ${(props) => props.borderTop};
  transition: all 300ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
  &:hover{
    background-color: ${(props) => props.theme.cardHover};
    cursor: pointer; 
  }
`

export const IconMedia = styled.img `
  width:20px;
  height:20px;
  margin-right:8px;
`

export const User = styled.div `
  display:flex;
  justify-content: center;

  & > h2{
    font-size:12px;
    font-weight:700;
    color:${(props) => props.theme.blueText};
  }

`
export const FollowersCounter = styled.div `
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;

  & > h1{
    font-size:56px;
    margin: 16px 0px;
    font-weight:700;
    color: ${(props) => props.theme.whiteText};
  }

  & > h3{
    font-size:14px;
    letter-spacing:0.4em;
    color: ${(props) => props.theme.blueText};
  }
`
export const ColorBar = styled.div`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  heigh:5px;
  background-color: red;
`