import styled from "styled-components";
import tw from "twin.macro";

export const StyledNav = styled.nav `
  ${tw `bg-indigo-500 p-4 text-center relative`}
`

export const StyledNavTitle = styled.h1 `
  ${tw `font-bold text-white text-4xl leading-tight`}
`

export const StyledButton = styled.button `
  ${tw `absolute right-4 top-1/2 -translate-y-1/2 bg-indigo-900 p-3 flex items-center rounded-lg`}

  .MuiSvgIcon-root {
    ${tw `fill-white`}
  }
`

export const StyledCartCant = styled.p `
  ${tw `bg-white rounded-full w-6 h-6 text-sm font-bold flex justify-center items-center text-indigo-500 mr-2`}
`