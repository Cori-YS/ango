import React from "react";

import MobileHeader from "../MobileHeaderE";
import LeftColumn from "../LeftColumnE";
import MiddleColumnE from "../MiddleColumnE";
import RightColumn from "../RightColumn";

import { Container } from "./styles";
import DesktopHeader from "../DesktopHeaderE";
import AdBanner from "../AdBanner";
import GlobalStyles from "./GlobalStyles"
const LayoutE = () => {
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
        <MiddleColumnE />
      </main>
    </Container>
    <GlobalStyles />
    </>
  );
};

export default LayoutE;
