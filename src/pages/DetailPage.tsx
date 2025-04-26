import PageMark from "@/components/custom/PageMark";
import PageMarkNavigation, {
  PageMarkNavigationItem,
} from "@/components/custom/PageMarkNavigation";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Bike,
  Car,
  CircleDollarSign,
  Heart,
  Info,
  Notebook,
} from "lucide-react";

export default function ParkingRentalUI() {

  const items: PageMarkNavigationItem[] = [
    { title: "Chung", value: "common", isPicked: true, icon: Info },
    { title: "Mô tả", value: "description", isPicked: false, icon: Notebook },
    {
      title: "Giá cả",
      value: "price",
      isPicked: false,
      icon: CircleDollarSign,
    },
    { title: "Lượt thích", value: "like", isPicked: false, icon: Heart },
    { title: "Đề xuất", value: "suggestion", isPicked: false, icon: Info },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-10">
      {/* Sidebar */}

      <div className="md:col-span-3">
        <PageMarkNavigation
          item={items}
          header={"Thông tin"}
          className={
            "border-none gap-1 p-4 rounded-lg overflow-hidden bg-background"
          }
        />
      </div>
      <div className="md:col-span-9 grid grid-cols-1 gap-2">
        {/* Main Image */}
        <div className="md:col-span-6 md:row-span-2">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/images/parkinglot.png"
              alt="Parking lot with car detection"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Right Info Card */}
        <Card className="md:col-span-3 gap-2 p-4 rounded-lg border-none bg-background ">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-xl">i</span>
            </div>
            <h2 className="text-xl font-bold">Chung</h2>
          </div>
          <div className="">
            <h1 className="text-lg font-bold">BÃI ĐỖ TÂN SƠN NHẤT</h1>
            <p className=" text-gray-600 mt-1">
              Tân Bình, Thành phố Hồ Chí Minh
            </p>

            <div className="flex gap-2 mt-4">
              <div className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-md">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-teal-500 flex items-center justify-center rounded-md">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-md">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-md">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              </div>
            </div>
          </div>
        </Card>

        {/* Description */}
        <Card className="md:col-span-12 p-0 rounded-lg overflow-hidden">
          {/* <div className="flex items-center p-4 border-b border-gray-100">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <h2 className="font-medium">Mô tả</h2>
        </div> */}
          <PageMark title="Mô tả" icon={Notebook} />
          <div className="p-4">
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Card>

        {/* Pricing */}
        <Card className="md:col-span-12 p-0 rounded-lg overflow-hidden">
          <PageMark title="Giá cả" icon={CircleDollarSign} />
          <div className="p-4 grid md:grid-cols-4 grid-cols-1 gap-4">
            {/* Bike Pricing */}
            <Card className="p-4 shadow-sm col-span-1">
              <div className="flex justify-center">
                <Bike size={24} />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Theo ngày</span>
                  <span className="font-medium">10.000 VND</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Theo tuần</span>
                  <span className="font-medium">60.000 VND</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Theo tháng</span>
                  <span className="font-medium">270.000 VND</span>
                </div>
              </div>
            </Card>

            {/* Car Pricing */}
            <Card className="p-4 shadow-sm col-span-1">
              <div className="flex justify-center">
                <Car size={24} />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Theo ngày</span>
                  <span className="font-medium">50.000 VND</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Theo tuần</span>
                  <span className="font-medium">340.000 VND</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Theo tháng</span>
                  <span className="font-medium">1.500.000 VND</span>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* Likes */}
        <Card className="md:col-span-12 p-0 rounded-lg overflow-hidden">
          <PageMark title="Lượt thích" icon={Heart} />

          <div className="p-4">
            <div className="flex gap-2">
              <Avatar className="w-10 h-10">
                <img src="/images/dalat.png" alt="Nguyễn Văn A" />
              </Avatar>

              <div className="flex-1">
                <div className="mb-1">
                  <span className="text-lg font-medium">Nguyễn Văn A</span>{" "}
                  <br />
                  <span className="text-xs text-primary/80">Khách hàng</span>
                </div>

                <div className="border rounded-md">
                  <Textarea
                    placeholder="Để lại đánh giá..."
                    className="resize-none border-0"
                    rows={2}
                  />
                </div>

                <div className="flex justify-end mt-2">
                  <Button
                    size="sm"
                    className="bg-black text-white hover:bg-black/80 rounded"
                  >
                    Gửi
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Reviews */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, index) => (
            <Card key={index} className="p-4 shadow-sm">
              <div className="text-gray-500 text-xs mb-2">24/01/2025</div>
              <p className="text-xs text-gray-800 mb-4">
                {index === 0
                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  : index === 1
                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
                  : "Lorem Ipsum is simply dummy text of the printing and."}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="gold"
                        stroke="gold"
                        strokeWidth="1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  <span className="ml-1 text-xs">5.0</span>
                </div>

                <div className="flex items-center gap-1">
                  <Avatar className="w-5 h-5">
                    <img src="/api/placeholder/20/20" alt="User" />
                  </Avatar>
                  <div>
                    <div className="text-xs font-medium">Nguyễn Văn A</div>
                    <div className="text-xs text-gray-500">Khách hàng</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
