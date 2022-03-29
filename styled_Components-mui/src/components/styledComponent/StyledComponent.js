import React from "react";
import { MyButton } from "./button/MyButton";
import Header from "./header/Header";
import Wrapper from "./wrapper/Wrapper";
import Link from "./link/Link";

const StyledComponent = () => {
  return (
    <Wrapper bgColor="gray">
      <Header baslikRenk="red">Merhaba</Header>
      <Link href="https://www.google.com" target="_blank" rel="noopener">
      Clarusway
      </Link>
      <MyButton renk>Mavi Buton</MyButton>
      <MyButton>Mavi Buton</MyButton>
    </Wrapper>
  );
};

export default StyledComponent;
