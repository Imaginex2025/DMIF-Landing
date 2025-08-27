import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content (takes up remaining space) */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
