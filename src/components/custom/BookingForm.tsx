import { Car } from "lucide-react";
import { useState } from "react";

// Import shadcn components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function ParkingOrderForm() {
  const [startDate, setStartDate] = useState("2025-05-02");
  const [endDate, setEndDate] = useState("2025-05-03");
  const [vehicle, setVehicle] = useState("");

  // Calculate duration and price (sample calculation)
  const calculateDuration = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  const calculatePrice = () => {
    const days = calculateDuration();
    const baseRate =
      vehicle === "car"
        ? 15
        : vehicle === "motorcycle"
        ? 8
        : vehicle === "truck"
        ? 25
        : vehicle === "bus"
        ? 30
        : 0;
    return baseRate * days;
  };

  const duration = calculateDuration();
  const price = calculatePrice();

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
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="end-date" className="text-xs text-primary">
              Check-out
            </Label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 border border-primary/60 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vehicle-select" className="text-sm font-medium">
          Vehicle Type
        </Label>
        <Select value={vehicle} onValueChange={setVehicle}>
          <SelectTrigger id="vehicle-select" className="w-full">
            <SelectValue placeholder="Select Vehicle..." />
          </SelectTrigger>
          <SelectContent className="w-full text-primary bg-background">
            <SelectItem value="car">Car</SelectItem>
            <SelectItem value="motorcycle">Motorcycle</SelectItem>
            <SelectItem value="truck">Truck</SelectItem>
            <SelectItem value="bus">Bus</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {vehicle && (
        <div className="bg-container p-4 rounded-lg space-y-3">
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
              ${price.toFixed(2)}
            </span>
          </div>
        </div>
      )}

      <Button>Book Now</Button>
    </>
  );
}
