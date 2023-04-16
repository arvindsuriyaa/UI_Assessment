import styled from "styled-components";

export const CarouselWrapper = styled.div`
  background: rgb(118, 141, 241);
  background: linear-gradient(
    128.04deg,
    rgb(187, 211, 251) -23.79%,
    rgb(75, 60, 255) 121.4%
  );
  height: 192px;
  width: 1200px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  margin-top:100px
`;

export const ImageWrapper = styled.div((prop) => ({
  backgroundImage: `url(${prop?.image})`,
  height: prop?.height ?? "auto",
  width: prop?.width ?? "auto",
  backgroundSize: prop?.size ?? "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: prop?.position ?? "center",
  marginTop: prop?.marginTop ?? 0,
}));

export const DescriptionWrapper = styled.div((prop) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  marginLeft: prop.marginLeft ?? "0px",
  width: prop.width ?? "auto",
}));
