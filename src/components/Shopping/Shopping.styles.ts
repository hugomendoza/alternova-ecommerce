import styled from "styled-components";
import tw from "twin.macro";

export const StyledShopping = styled.article`
  ${tw `flex py-6`}
`

export const StyledFigure = styled.figure`
  ${tw `h-16 w-16 flex-shrink-0 rounded-md border border-gray-200`}
`
export const StyledImage = styled.img `
  ${tw `h-full w-full object-cover object-center`}
`
export const StyledData = styled.div`
  ${tw `ml-4 flex flex-1 flex-col`}
`

export const StyledProduct = styled.div `
  ${tw `flex justify-between text-base font-medium text-gray-900`}
`

export const StyledName = styled.h3 `
  ${tw ``}
`

export const StyledCant = styled.div `
  ${tw`flex flex-1 items-end justify-between text-sm`}
`

export const StyledText = styled.p`
  ${tw `text-gray-500`}
`

export const StyledButton = styled.button`
  ${tw `font-medium text-indigo-600 hover:text-indigo-500`}
`