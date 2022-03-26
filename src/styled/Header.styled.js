import styled from 'styled-components';

export const Header = styled.header`
  margin: 36px 0px 49px 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 650px){
    flex-direction: column;
    align-items: flex-start;

    & .toggle{
      padding-top:35px;
    }
  }

  & > div > h2{
    margin-bottom:2px;
    line-height: 1.3;
  }
  & > div > h3{
    letter-spacing:0.5px;
    font-weight:700;
  }

  & .toggle{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > h3 {
      text-transform: capitalize;
      margin-right:17px;
      font-weight:700;
    }

  }
`