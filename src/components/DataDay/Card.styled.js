import styled from "styled-components"

export const Card = styled.div`
  min-width:256px;
  background-color: ${(props) => props.theme.cardBackground};
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius:5px;
  padding: 25px 30px;
  transition: all 300ms cubic-bezier(0.250, 0.460, 0.450, 0.940);

`
export const Rows = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;

  & img{
    width:20px;
    height:20px;
  }

  & h3{
    color:${(props) => props.theme.blueText};
    font-size:14px;
    font-weight:700;
    text-transform: capitalize;
  }
`