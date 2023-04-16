import React from "react";
import {
  LandingDescription,
  LandingWrapper,
} from "../LandingBanner/landing.styles";
import CardDetails from "./card";

function MillionInfoSection() {
  return (
    <LandingWrapper style={{ justifyContent: "center", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LandingDescription size={40} marginTop={20}>
          Used by millions.{" "}
        </LandingDescription>
        <LandingDescription size={40} marginBottom={20}>
          Trusted with billions.
        </LandingDescription>
        <LandingDescription
          color={"#b8add2"}
          width={"50%"}
          marginBottom={30}
          size={16}
          fontWeight={500}
        >
          PancakeSwap has the most users of any decentralized platform, ever.
          And those users are now entrusting the platform with over $3 billion
          in funds.
        </LandingDescription>
        <div>Will you join them?</div>
        <div style={{ display: "flex" }}>
          {[1, 2, 3].map((item) => (
            <CardDetails>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <span class="material-symbols-outlined">add_circle</span>
              </div>
              <div style={{ marginTop: 20,textAlign:'left',marginRight:50 }}>
                <LandingDescription size={40}>18 million</LandingDescription>
                <LandingDescription size={40} color="#9a6aff">trades</LandingDescription>
                <LandingDescription size={16} fontWeight={200} style={{marginTop:20}}>made in the last 30 days</LandingDescription>
              </div>
            </CardDetails>
          ))}
        </div>
      </div>
    </LandingWrapper>
  );
}

export default MillionInfoSection;
