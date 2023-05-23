import React from "react";
import Header1 from "./Header1";
import Footer from "./Footer";

const Layout1 = ({ children }) => {
    return (
        <>
            <Header1 />
            {children}
            <Footer />
        </>
    );
};

export default Layout1;