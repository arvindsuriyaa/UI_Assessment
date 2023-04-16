import React from "react";
import {
  CarouselWrapper,
  ImageWrapper,
  DescriptionWrapper,
} from "./carousel.styles";

import { CustomButton } from "../../../../common/Button/button.styles";
// import { url } from "inspector";

function Carousel() {
  return (
    <CarouselWrapper>
      <DescriptionWrapper marginLeft={30}>
        <div>Ev3ryone's Favourite D3X</div>
        <div>PancakeSwap v3 is live!</div>
        <CustomButton bgcolor="#1EC7D5" color="white">
          Discover V3
        </CustomButton>
      </DescriptionWrapper>
      <ImageWrapper
        image={require("../../../../../asset/ETHBunny.webp")}
        height={228}
        width={"50%"}
        size={"cover"}
        position={"right"}
        marginTop={"-18px"}
      />
    </CarouselWrapper>
  );
}

export default Carousel;
