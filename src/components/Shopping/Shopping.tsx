import { StyledFigure,
  StyledImage,
  StyledShopping,
  StyledData,
  StyledProduct,
  StyledName,
  StyledText,
  StyledCant,
  StyledButton
} from "./Shopping.styles"

export const Shopping = () => {
  return (
    <StyledShopping>
      
      <StyledFigure>
        <StyledImage
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
        />
      </StyledFigure>

      <StyledData>
        <StyledProduct>
          <StyledName>
            Throwback Hip Bag
          </StyledName>
          <StyledText className="ml-4">
            $90.00
          </StyledText>
        </StyledProduct>
        <StyledCant>
          <StyledText className="ml-4">
            Cantidad: 1
          </StyledText>
          <StyledButton>Remove</StyledButton>
        </StyledCant>
      </StyledData>
    </StyledShopping>
  )
}

{/* <div className="ml-4 flex flex-1 flex-col">
  <div className="flex justify-between text-base font-medium text-gray-900">
    <h3>
      Throwback Hip Bag
    </h3>
    <p className="ml-4">$90.00</p>
  </div>
  <div className="flex flex-1 items-end justify-between text-sm">
    <p className="text-gray-500">Cantidad: 1</p>
    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
  </div>
</div> */}
