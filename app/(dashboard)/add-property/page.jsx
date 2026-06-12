import AddProperty from "@/components/dashboard/AddProperty";
import React, { Suspense } from "react";

export const metadata = {
  title: "Add Property || Growl City Realty React",
  description: "Growl - Real Estate",
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddProperty />
    </Suspense>
  );
}