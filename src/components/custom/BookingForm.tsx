import { useEffect, useState } from "react";
import { format, differenceInCalendarDays } from "date-fns";

// UI components
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCreateOrder } from "@/services/hook/useOrder";
import { formatDateBoundary } from "@/services/utils/formatDateBoundary";
import { PriceCardProps } from "@/lib/models";
import { MoneyConvert, StringConvert } from "@/services/utils/convert";
import { Car } from "lucide-react";

export default function ParkingOrderForm({
  idLot,
  vehicles,
}: {
  idLot: number;
  vehicles: PriceCardProps[];
}) {
  const [startDate, setStartDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [endDate, setEndDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [vehicle, setVehicle] = useState("");
  const [duration, setDuration] = useState(1);
  const [price, setPrice] = useState(0);

  const orderMutation = useCreateOrder();
  const today = format(new Date(), "yyyy-MM-dd");

  const handleCreateOrder = () => {
    const orderData = {
      lotId: idLot,
      startTime: formatDateBoundary(startDate, "BEGIN"),
      endTime: formatDateBoundary(endDate, "END"),
      vehicleType: vehicle.toLowerCase(),
    };

    orderMutation.mutate(orderData);
  };

  useEffect(() => {
    // Tính giá theo ngày / tuần / tháng
    const calculatePrice = (start: string, end: string, type: string): number => {
      const selectedVehicle = vehicles.find((v) => v.title === type);
      if (!selectedVehicle) return 0;

      let days = differenceInCalendarDays(new Date(end), new Date(start)) + 1;
      const pricesMap = Object.fromEntries(
        selectedVehicle.prices.map((p) => [p.title.toLowerCase(), p.price])
      );

      let total = 0;

      if (pricesMap.month && days >= 30) {
        const months = Math.floor(days / 30);
        total += months * pricesMap.month;
        days -= months * 30;
      }

      if (pricesMap.week && days >= 7) {
        const weeks = Math.floor(days / 7);
        total += weeks * pricesMap.week;
        days -= weeks * 7;
      }

      if (pricesMap.day) {
        total += days * pricesMap.day;
      }

      return total;
    };

    if (vehicle && startDate && endDate) {
      const days = differenceInCalendarDays(new Date(endDate), new Date(startDate)) + 1;
      setDuration(days);
      setPrice(calculatePrice(startDate, endDate, vehicle));
    }
  }, [startDate, endDate, vehicle, vehicles]);

  return (
    <>
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="start-date" className="text-xs text-primary">
              Check-in
            </Label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => {
                const newStart = e.target.value;
                setStartDate(newStart);
                if (new Date(newStart) > new Date(endDate)) {
                  setEndDate(newStart);
                }
              }}
              min={today}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="end-date" className="text-xs text-primary">
              Check-out
            </Label>
            <input
              min={today}
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 border border-primary/60 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <Label htmlFor="vehicle-select" className="text-sm font-medium">
          Vehicle Type
        </Label>
        <Select value={vehicle} onValueChange={setVehicle}>
          <SelectTrigger id="vehicle-select" className="w-full">
            <SelectValue placeholder="Select Vehicle..." />
          </SelectTrigger>
          <SelectContent className="w-full text-primary bg-background">
            {vehicles.map((item, index) => (
              <SelectItem key={index} value={item.title}>
                {StringConvert.Capitalize(item.title)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {vehicle && (
        <div className="bg-container p-4 rounded-lg space-y-3 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Car />
              <span className="font-medium capitalize">{vehicle}</span>
            </div>
            <Badge className="bg-background text-primary rounded-full px-2 py-1">
              {duration} {duration === 1 ? "day" : "days"}
            </Badge>
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <span className="text-primary">Estimated Price:</span>
            <span className="text-primary text-lg font-bold">
              {MoneyConvert.From(price, "VNĐ")}
            </span>
          </div>
        </div>
      )}

      <Button onClick={handleCreateOrder} className="mt-6 w-full">
        Book Now
      </Button>
    </>
  );
}
