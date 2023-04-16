import React from "react";
import { ContentWrapper } from "./content.styles";
import Carousel from "./section/Carousel/Carousel";
import LandingBanner from "./section/LandingBanner/LandingBanner";
import MillionInfoSection from "./section/MillionInfo/MillionInfoSection";

function Layout() {
  return (
    <ContentWrapper>
      <Carousel />
      <LandingBanner />
      <MillionInfoSection />
    </ContentWrapper>
  );
}

export default Layout;
