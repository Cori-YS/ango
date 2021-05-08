import React from "react";

import MobileHeader from "../MobileHeader";
import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";

import { Container } from "./styles";
import DesktopHeader from "../DesktopHeader";
import AdBanner from "../AdBanner";
import GlobalStyles from "./GlobalStyles"
const Layout = () => {
  return (
    <>
    <Container>
    <DesktopHeader className="mt-8" />
      <MobileHeader />
      <span>
        <AdBanner />
      </span>
      <main>
        <LeftColumn />
        <MiddleColumn />
      </main>
    </Container>
    <GlobalStyles />
    </>
  );
};

export default Layout;
