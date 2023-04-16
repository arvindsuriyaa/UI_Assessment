import React from "react";
import { CustomButton } from "../../../../common/Button/button.styles";
import { DescriptionWrapper, ImageWrapper } from "../Carousel/carousel.styles";
import { LandingDescription, LandingWrapper, Title } from "./landing.styles";

function LandingBanner() {
  return (
    <LandingWrapper>
      <DescriptionWrapper width={"75%"}>
        <div>
          <Title>The moon is made of pancakes.</Title>
          <LandingDescription marginTop={20} marginBottom={20}>
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </LandingDescription>
          <div>
            <CustomButton
              bgcolor="#1EC7D5"
              color="black"
              style={{ marginRight: 10 }}
            >
              Connect Wallet
            </CustomButton>
            <CustomButton color="#1EC7D5">Trade Now</CustomButton>
          </div>
        </div>
      </DescriptionWrapper>
      <ImageWrapper
        image={require("../../../../../asset/astronaut-bunny.webp")}
        height={"90%"}
        width={"100%"}
        size={"contain"}
      />
    </LandingWrapper>
  );
}

export default LandingBanner;
