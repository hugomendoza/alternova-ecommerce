import { StyledButton, StyledCartCant, StyledNav, StyledNavTitle, StyledPropsNav } from "./Nav.styles"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface PropsNav extends StyledPropsNav {
  to: string;
  items: number
}

export const Nav = (props:PropsNav) => {

  const {to, offset, smooth, spy, duration, items} = props

  return (

    <StyledNav>
      <StyledNavTitle>Alternova Shop</StyledNavTitle>
      <StyledButton
        to={to}
        spy={spy}
        smooth={smooth}
        offset={offset}
        duration={duration}
      >
        <StyledCartCant>{items}</StyledCartCant>
        <ShoppingCartIcon />
      </StyledButton>
    </StyledNav>
  
  )
}

const defaultProps:PropsNav = {
  to: "buy",
  spy: true,
  smooth: true,
  offset: 0,
  duration: 300,
  items: 0,
}

Nav.defaultProps = defaultProps;
