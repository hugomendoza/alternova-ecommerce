import styled from "styled-components";
import tw from "twin.macro";

export interface StyledCardProps {
  name?: string;
  unit_price?: number;
  type?: string;
  inputmode?: string;
  pattern?: string;
}

export const StyledCard = styled.article`
  ${tw `relative`}
`

export const StyledFigure = styled.figure`
  ${tw `aspect-square w-full rounded-lg`}
`

export const StyledImage = styled.img `
  ${tw `h-full w-full object-cover object-center rounded-lg shadow-lg`}
`
export const StyledHeader = styled.header`
  ${tw `mt-4 space-y-3`}
`
export const StyledTitle = styled.h2<StyledCardProps>`
  ${tw `text-gray-700 font-black leading-tight h-10`}
`

export const StyledText = styled.p<StyledCardProps>`
  ${tw `text-sm font-medium text-gray-900 leading-tight`}
`
export const StyledLabel = styled.span<StyledCardProps>`
  ${tw `text-sm text-white py-1 px-3 rounded-md table`}
  ${ props => {
    switch (props.type) {
      case "technology":
        return tw `bg-cyan-600`
      case "sport":
        return tw `bg-teal-500`
      case "building":
        return tw `bg-rose-500`
      default:
        return ``
    }
  }}
`

export const StyledInput = styled.input<StyledCardProps>`
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; 
    margin: 0; 
  }
  ${tw `px-3 py-1 text-gray-400 border rounded-lg w-16`}
`

export const StyledDiv = styled.div`
  ${tw `flex justify-between items-center`}
`