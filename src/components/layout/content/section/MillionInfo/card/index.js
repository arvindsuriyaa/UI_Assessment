import React from "react";
import styled from "styled-components";

function CardDetails({ children }) {
  const Container = styled.div`
    background: #383241;
    border-radius: 24px;
    color: #f4eeff;
    margin:20px;
    padding:20px
  `;

  return <Container>{children}</Container>;
}

export default CardDetails;
