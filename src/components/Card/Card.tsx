import { Button } from "../Button";
import { StyledCard,
  StyledCardProps,
  StyledDiv,
  StyledFigure,
  StyledHeader,
  StyledImage,
  StyledInput,
  StyledLabel,
  StyledText,
  StyledTitle
} from "./Card.styles"

interface CardProps extends StyledCardProps {
  id: number,
  img: string
  alt: string;
  stock?: number;
  onPress: () => void;
}

export const Card = (props:CardProps) => {

  const {name, unit_price, type, img, onPress } = props

  return (
    <>
      <StyledCard>
        <StyledFigure>
          <StyledImage
            src={img}
            alt={name}
          />
        </StyledFigure>

        <StyledHeader>
          <StyledTitle>{name}</StyledTitle>
          <StyledDiv>
            <StyledText>${unit_price}</StyledText>
            <StyledText>
              Cantidad:
            </StyledText>
          </StyledDiv>
          <StyledDiv>
            <StyledLabel type={type}>
              {type}
            </StyledLabel>
            <StyledInput type="number" />
          </StyledDiv>
          <Button onPress={onPress} />
        </StyledHeader>
      </StyledCard>
    </>
  )
}

const defaultProps:CardProps = {
  id: 0,
  name: "",
  img: "",
  alt: "",
  type: "",
  stock: 0,
  onPress: () => { },
}

Card.defaultProps = defaultProps;
