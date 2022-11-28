import { StyledButton, StyledCartCant, StyledNav, StyledNavTitle } from "./Nav.styles"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export const Nav = () => {
  return (

    <StyledNav>
      <StyledNavTitle>Alternova Shop</StyledNavTitle>
      <StyledButton>
        <StyledCartCant>1</StyledCartCant>
        <ShoppingCartIcon />
      </StyledButton>
    </StyledNav>
  
  )
}
