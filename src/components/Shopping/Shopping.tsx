import { StyledFigure,
  StyledImage,
  StyledShopping,
  StyledData,
  StyledProduct,
  StyledName,
  StyledText,
  StyledCant,
  StyledButton,
  StyledShoppingProps
} from "./Shopping.styles"

interface ShoppingProps extends StyledShoppingProps {
  id: number,
  img: string
  alt: string;
  type?: string;
  stock?: number;
  cant: number;
  unit_price: number;
  onPress: () => void;
}

export const Shopping = (props:ShoppingProps) => {

  const {name, unit_price, img, onPress, cant } = props

  return (
    <StyledShopping>
      
      <StyledFigure>
        <StyledImage
          src={img}
          alt={name}
        />
      </StyledFigure>

      <StyledData>
        <StyledProduct>
          <StyledName>
            {name}
          </StyledName>
          <StyledText className="ml-4">
            ${unit_price * cant}
          </StyledText>
        </StyledProduct>
        <StyledCant>
          <StyledText>
            Cantidad: {cant}
          </StyledText>
          <StyledButton onClick={onPress}>Remove</StyledButton>
        </StyledCant>
      </StyledData>
    </StyledShopping>
  )
}

const defaultProps:ShoppingProps = {
  id: 0,
  name: "",
  img: "",
  alt: "",
  type: "",
  stock: 0,
  cant: 0,
  unit_price: 0,
  onPress: () => { },
}

Shopping.defaultProps = defaultProps;