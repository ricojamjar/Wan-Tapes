import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #fff;
`;

const Image = styled.div`
  overflow: hidden;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  background: url("https://wantapes.com/images/wansplash.svg") center center
    no-repeat;
  background-size: 85%;
`;

const ImageWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: #fff;
`;

export default function HomePage() {
  return (
    <Container className="Container">
      <Link to="/releases">
        <ImageWrap className="ImageWrap">
          <Image className="Image" />
        </ImageWrap>
      </Link>
    </Container>
  );
}
