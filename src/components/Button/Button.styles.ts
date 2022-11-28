import styled from "styled-components";
import tw from "twin.macro";

export interface StyledButtonProps {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${ props => {
    switch (props.variant) {
      case "primary":
        return `
          background-color: red;
        `
      case "secondary":
        return `
          background-color: green;
        `
      case "outline":
        return `
          border: 1px solid black;
          background-color: transparent;
          color: black;
          border-radius: 0px;
        `
      default:
        return `
          ${tw `w-32 bg-amber-500 flex`}
        `
    }
  }}
`