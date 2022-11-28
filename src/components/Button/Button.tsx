import { StyledButtonProps, StyledButton } from "./Button.styles"

interface ButtonProps extends StyledButtonProps {
  name: string;
  onPress: () => void;
}

export const Button = (props:ButtonProps) => {
  
  const {name, variant, onPress, className } = props
  
  return (
    <StyledButton variant={variant} onClick={onPress} className={className}>
      {name}
    </StyledButton>
  )
}

const defaultProps:ButtonProps = {
  name: "Guardar",
  variant: "primary",
  onPress: () => {},
  className: "StyledButton"
}

Button.defaultProps = defaultProps;