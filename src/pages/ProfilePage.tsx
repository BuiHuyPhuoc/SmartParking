import PageMarkNavigation from "@/components/custom/PageMarkNavigation";
import ChatMessage from "@/components/custom/profile_page/ChatMessage";
import PersonalInformation from "@/components/custom/profile_page/PersonalInformation";
import { Button } from "@/components/ui/button";
import { PageMarkNavigationItem } from "@/lib/models";
// import { LoginResponse } from "@/services/api/authService";
import { useLogout } from "@/services/hook/useAuth";
import { Info, MessageCircleHeartIcon, Settings, ShieldAlert } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const logoutMutation = useLogout();

  const navItems: PageMarkNavigationItem[] = [
    { title: "Chung", value: "common", isPicked: true, icon: Info, component: <PersonalInformation /> },
    {
      title: "Bảo mật",
      value: "description",
      isPicked: false,
      icon: ShieldAlert,
    },
    {
      title: "Cài đặt",
      value: "Setting",
      isPicked: false,
      icon: Settings,
    },
    {
      title: "Liên hệ",
      value: "Chat",
      isPicked: false,
      icon: MessageCircleHeartIcon,
      component: <ChatMessage />,
    },
  ];

  const [currentNavItems, setNavItems] = useState(navItems);

  return (
    <div className="grid md:grid-cols-12 grid-cols-1 gap-2">
      <div className="md:col-span-3 w-full h-screen">
        <PageMarkNavigation
          className="border-none gap-1 p-4 rounded-lg overflow-hidden bg-background"
          header="Thông tin"
          item={navItems}
          onClick={(item) => {
            const updatedItems = navItems.map((navItem) => ({
              ...navItem,
              isPicked: navItem.value === item.value,
            }));
            console.log(item.icon);
            setNavItems(updatedItems);
          }}
        />

        <Button onClick={() => logoutMutation.mutate()} className="w-full mt-2">
          Đăng xuất
        </Button>
      </div>

      {
        <div className="md:col-span-9 w-full">
          {
            currentNavItems.find((item) => item.isPicked)?.component ?? <div className="md:col-span-9">
              <div className="flex items-center justify-center h-full">
                <h1 className="text-2xl font-bold text-gray-700">Chưa có thông tin</h1>
              </div>
            </div>
          }
        </div>

      }

    </div>
  );
}
