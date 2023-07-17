import React, { PropsWithChildren } from "react";
import { Footer } from "../Footer";
import { Header, MobileMenu } from "../Header";

export const BaseLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="offcanvas-overlay"></div>
      <MobileMenu />
      {children}
      <Footer />
    </>
  );
};
