import FadedContainer from "@/components/animation/FadedInContainer";
import ParkingOrderForm from "@/components/custom/BookingForm";
import { LeaveCommentForm } from "@/components/custom/LeaveCommentForm";
import { ListReview } from "@/components/custom/ListReview";
import PageMark from "@/components/custom/PageMark";
import PageMarkNavigation from "@/components/custom/PageMarkNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PageMarkNavigationItem, PriceCardProps } from "@/lib/models";
import { useGetLotById } from "@/services/hook/useLot";
import { MoneyConvert, StringConvert } from "@/services/utils/convert";
import {
  BikeIcon,
  Bot,
  Camera,
  CarIcon,
  CircleDollarSign,
  Heart,
  HelpCircleIcon,
  House,
  Info,
  InfoIcon,
  LucideIcon,
  Notebook,
  Table,
  Wifi
} from "lucide-react";
import { useParams } from "react-router-dom";

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

  const { id } = useParams<{ id: string }>();

  const lotId = id ? parseInt(id) : 0;

  const { data: lotData } = useGetLotById(lotId);

  const periodPriority: Record<string, number> = {
    day: 1,
    week: 2,
    month: 3,
    year: 4
  };

  const priceCards: PriceCardProps[] = lotData?.value.prices
    ? Object.values(
      lotData.value.prices.reduce<
        Record<string, Omit<PriceCardProps, "icon">>
      >((acc, curr) => {
        const { type, price, period } = curr;

        if (!acc[type]) {
          acc[type] = {
            title: StringConvert.Capitalize(type),
            prices: []
          };
        }

        acc[type].prices.push({
          title: period,
          price: price
        });

        return acc;
      }, {})
    ).map(group => ({
      ...group,
      // ✅ Chỉ sắp xếp giá trong từng loại xe
      prices: group.prices.sort((a, b) => {
        const aPriority = periodPriority[a.title.toLowerCase()] ?? 99;
        const bPriority = periodPriority[b.title.toLowerCase()] ?? 99;
        return aPriority - bPriority;
      }),
      icon: getIcon(group.title.toLowerCase())
    }))
    : [];

  if (!lotData) {
    return <div>Loading...</div>;
  }

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

      <FadedContainer className="md:col-span-9 grid grid-cols-12 gap-2">

        <div className="md:col-span-12 grid grid-cols-7 gap-2">
          <div className="h-full md:col-span-4">
            <div className="h-full relative rounded-lg overflow-hidden">
              <img
                src={lotData.value.imageUrl}
                alt="Parking lot with car detection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="h-full md:col-span-3">
            <Card className="p-4 rounded-lg border-none bg-background h-full mb-2 flex flex-col">
              <PageMark title="Chung" icon={InfoIcon} size={24} />

              <div className="mb-2 h-full">
                <h1 className="text-lg font-bold mt-1">{lotData.value.name}</h1>
                <p className=" text-gray-600 mt-1">
                  {`${lotData.value.street}, ${lotData.value.ward}, ${lotData.value.district}, ${lotData.value.province}`}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {lotData.value.amenities.map((item, index) => {
                    const Icon = getIcon(item.amenityName);
                    return (
                      <div
                        key={index}
                        title={item.amenityName}
                        className="w-10 h-10 flex cursor-pointer hover:bg-primary/50 items-center justify-center gap-1 bg-primary rounded-2xl px-2 py-1"
                      >
                        <Icon size={16} className="text-on-primary" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full mt-auto">Parking Reservation</Button>
                </DialogTrigger>
                <DialogContent className="border-none">
                  <DialogHeader>
                    <DialogTitle>Parking Reservation</DialogTitle>
                  </DialogHeader>
                  <ParkingOrderForm idLot={lotId} vehicles={priceCards} />
                </DialogContent>
              </Dialog>

            </Card>
          </div>
        </div>

        <Card className="md:col-span-12 rounded-lg overflow-hidden">

          <PageMark title="Mô tả" icon={Notebook} size={24} />
          <div className="">
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Card>

        {/* Pricing */}
        <Card className="md:col-span-12 rounded-lg overflow-hidden">
          <PageMark title="Giá cả" icon={CircleDollarSign} size={24} />

          <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-4">
            {priceCards.map((item) => {
              return (
                <PriceCard
                  key={item.title}
                  title={item.title}
                  prices={item.prices}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </Card>

        <LeaveCommentForm lotId={lotId} />

        <ListReview idLot={lotId} />

      </FadedContainer>
    </div>
  );
}

const PriceCard = (prop: PriceCardProps) => {
  return (
    <Card className="shadow-sm col-span-1 rounded-lg">
      <div className="flex self-center">
        <prop.icon className="text-primary" size={24} />
      </div>
      <div className="space-y-3">
        {prop.prices.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-xs">By {StringConvert.Lower(item.title)}</span>
            <span className="font-medium">{MoneyConvert.From(item.price, "VND")}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

const getIcon = (type: string): LucideIcon => {
  switch (type) {
    case "car":
      return CarIcon;
    case "motor":
      return BikeIcon;
    case "Trong nhà":
      return House;
    case "Wifi":
      return Wifi;
    case "Tự động":
      return Bot;
    case "Camera":
      return Camera
    case "Tủ đồ":
      return Table;
    default:
      return HelpCircleIcon; // icon mặc định nếu không khớp
  }
};