import styled, { css } from "styled-components";

export const CustomButton = styled.button`
  ${(prop) => ({
    boxShadow: "rgba(14, 14, 44, 0.4) 0px -1px 0px 0px inset",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "16px",
    fontWeight: "600",
    WebkitBoxPack: "center",
    justifyContent: "center",
    letterSpacing: "0.03em",
    lineHeight: "1",
    opacity: "1",
    outline: "0px",
    transition: "background-color 0.2s ease 0s, opacity 0.2s ease 0s",
    height: "48px",
    padding: "0px 24px",
    backgroundColor: prop.bgcolor ?? "transparent",
    color: prop.color,
    border: prop.bgcolor ? "none" : `2px solid ${prop.color}`,
    borderRadius: 16,
  })}

  ${(props) =>
    css`
      &:hover {
        opacity: 0.6;
      }
    `}
`;
