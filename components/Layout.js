import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

const Layout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="">
      <Header
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />

      {showMobileMenu && (
        <MobileMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      )}

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
