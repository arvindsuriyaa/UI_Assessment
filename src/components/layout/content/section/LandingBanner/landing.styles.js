import styled from "styled-components";

export const LandingWrapper = styled.div`
  height: 100vh;
  display: flex;
  padding: 0px 20px;
  margin-top: 100px;
`;

export const Title = styled.h2`
  font-size: 64px;
  font-weight: 600;
  line-height: 1.1;
  color: #9a6aff;
  margin-bottom: 24px;
`;

export const LandingDescription = styled(Title)((prop) => ({
  fontSize: prop?.size ?? "20px",
  color: prop?.color ?? "#f4eeff",
  marginBottom: prop?.marginBottom ?? "0px",
  marginTop: prop?.marginTop ?? "0px",
  width: prop?.width ?? "auto",
  margin: prop?.margin,
  fontWeight: prop?.fontWeight,
}));
