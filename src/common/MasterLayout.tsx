import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import AppPromo from "@/components/custom/AppPromo";

export default function MasterLayout() {
  return (
    <div className="min-h-screen bg-container">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-1"></div>
        <div className="col-span-1 md:col-span-10">
          <Outlet />
        </div>
        <div className="md:col-span-1"></div>
      </div>
      <AppPromo />
      <Footer />
    </div>
  );
}
