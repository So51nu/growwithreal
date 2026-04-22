import Sidebar from "@/components/userdashboard/Sidebar";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "User Dashboard || Proty - Real Estate React Nextjs Template",
  description: "Proty - Real Estate React Nextjs Template",
};

export default function Layout({ children }) {
  return (
    <div className="bg-dashboard">
      <div id="wrapper" className="bg-4">
        <Header1 parentClass="header dashboard" />
        <div className="page-layout">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}