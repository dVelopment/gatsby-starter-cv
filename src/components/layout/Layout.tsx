import * as React from "react";
import "../../styles/global.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-void noise-overlay">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
