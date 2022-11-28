import { StyledButton, StyledCartCant, StyledNav, StyledNavTitle, StyledPropsNav } from "./Nav.styles"
import { animateScroll as scroll} from 'react-scroll';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface PropsNav extends StyledPropsNav {
  to: string;
}

export const Nav = (props:PropsNav) => {

  const {to, offset, smooth, spy, duration} = props

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
        <StyledCartCant>1</StyledCartCant>
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
}

Nav.defaultProps = defaultProps;
