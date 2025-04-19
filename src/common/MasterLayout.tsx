import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { SmartphoneIcon } from "lucide-react";

export default function MasterLayout() {
  return (
    <div className="min-h-screen bg-container">
      <Header />
      <Outlet />
      {/* Mobile App Promo */}
      <div className="fixed bottom-4 right-4 z-20 ">
        <button className="flex items-center bg-primary text-on-primary hover:bg-primary-hover hover:text-on-primary-hover border border-outline px-4 py-3 rounded-lg shadow-lg cursor-pointer">
          <SmartphoneIcon className="mr-2" size={20} />
          <span>Tiết kiệm nhiều hơn trên ứng dụng!</span>
        </button>
      </div>
      <Footer />
    </div>
  );
}
