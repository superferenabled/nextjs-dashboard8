import React from "react";
import { Sidebar } from "@/app/components";

export const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex flex-row justify-evenly relative w-screen">
        <Sidebar />
        <div className="p-2 text-slate-900 border-2 border-red-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
