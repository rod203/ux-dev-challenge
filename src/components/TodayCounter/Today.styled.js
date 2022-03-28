import styled from 'styled-components';

export const CounterDisplay = styled.div`
  color: #ffff;

  & .negative{
    color: hsl(356, 69%, 56%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & img{
      width:8px;
      height:4px;
      margin-right: 4px;
    }
  }

  & .positive{
    color: hsl(163, 72%, 41%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    & img{
      width:8px;
      height:4px;
      margin-right: 4px;
    }
  }
`