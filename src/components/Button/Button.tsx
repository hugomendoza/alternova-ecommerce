import { StyledButton } from "./Button.styles"

interface ButtonProps {
  name: string;
  onPress: () => void;
}

export const Button = (props:ButtonProps) => {
  
  const {name, onPress } = props
  
  return (
    <StyledButton onClick={onPress}>
      {name}
    </StyledButton>
  )
}

const defaultProps:ButtonProps = {
  name: "Agregar al carrito",
  onPress: () => {},
}

Button.defaultProps = defaultProps;