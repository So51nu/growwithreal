import Favorites from "@/components/dashboard/Favorites";
import React from "react";

export const metadata = {
  title: "My Favorites || Growl City Realty React Nextjs Template",
  description: "Growl City Realty React Nextjs Template",
};
export default function page() {
  return (
    <>
      <Favorites />
    </>
  );
}
