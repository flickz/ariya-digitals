import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import Login from "../components/Login";

const IndexPageWrapper = styled.div`
  margin: 0;
  background-color: #000;
  height: 100%;
  color: #fff;
`;

const Header = styled.header`
  margin: 30px;
`;

const MainContentWrapper = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
`;
const WorldMapWrapper = styled.div`
  background-image: url("/static/img/map.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
`;

export default class Index extends React.Component {
  render() {
    return (
      <IndexPageWrapper>
        <Header>
          <Logo />
        </Header>
        <MainContentWrapper>
          <Login width={4 / 5} />
          <WorldMapWrapper />
        </MainContentWrapper>
      </IndexPageWrapper>
    );
  }
}
