import styled from 'styled-components';

export const MediaCardContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-auto-rows: 215px;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}

  @media (min-width: 866px){
    grid-template-columns: repeat(auto-fit, minmax(12rem, 2fr));
  }

`