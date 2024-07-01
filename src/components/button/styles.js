import styled, { css } from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 2px solid purple;
  text-align: center;
  background-color: purple;

  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #fafafa;

  transition: ease-in-out 0.2s;

  &:hover {
    background-color: rebeccapurple;
  }
  ${({ variant }) =>
    variant === false &&
    css`
      pointer-events: none;
      background-color: gray;
      border: none;
      &:hover {
        background-color: gray;
      }
    `}
`
