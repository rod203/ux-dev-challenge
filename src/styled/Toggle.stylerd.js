import styled from "styled-components";

export const Toggle =  styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 50px;
    height: 25px;
    display: inline-block;
    position: relative;
    border-radius: 50px;
    overflow: hidden;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: hsl(230, 22%, 74%);
    transition: background-color ease 0.3s;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none; 

    &:before {
      content: "";
      display: block;
      position: absolute;
      z-index: 2;
      width: 20px;
      height: 20px;
      background: hsl(228, 28%, 20%);
      left: 3px;
      top: 2.1px;
      border-radius: 50%;
      color: #fff;
      text-shadow: -1px -1px rgba(0,0,0,0.15);
      box-shadow: 0 1px 2px rgba(0,0,0,0.2);
      transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
    }

    &:checked {
      background: linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%);
    }

    &:checked:before {
      left: 27px;
    }
`