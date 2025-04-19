import { ChevronRight, ChevronsUpDown, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Button } from "../components/ui/button";
import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../components/ui/command";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import parkinglotImage from "@/assets/parkinglot.png";


export default function HomePage() {
  const destinations = [
    {
      id: 1,
      name: "Hồ Chí Minh",
      accommodations: "15,546 chỗ ở",
      image: "/images/saigon.png",
    },
    {
      id: 2,
      name: "Vũng Tàu",
      accommodations: "8,329 chỗ ở",
      image: "/images/vungtau.png",
    },
    {
      id: 3,
      name: "Đà Nẵng",
      accommodations: "5,534 chỗ ở",
      image: "/images/danang.png",
    },
    {
      id: 4,
      name: "Đà Lạt",
      accommodations: "5,165 chỗ ở",
      image: "/images/dalat.png",
    },
    {
      id: 5,
      name: "Hà Nội",
      accommodations: "10,744 chỗ ở",
      image: "/images/hanoi.png",
    },
    {
      id: 6,
      name: "Phú Quốc",
      accommodations: "4,210 chỗ ở",
      image: "/images/phuquoc.png",
    },
  ];

  const [openPickAddress, setOpenPickAddress] = React.useState(false);
  const [openPickVehicle, setOpenPickVehicle] = React.useState(false);

  const [value, setValue] = React.useState("");
  const [vehicleValue, setVehicleValue] = React.useState("");

  const addresses = [
    {
      value: "HoChiMinh",
      label: "Hồ Chí Minh",
    },
    {
      value: "HaNoi",
      label: "Hà Nội",
    },
    {
      value: "HaiPhong",
      label: "Hải Phòng",
    },
    {
      value: "DaLat",
      label: "Đà Lạt",
    },
  ];

  const vehicles = [
    {
      value: "car",
      label: "Xe hơi",
    },
    {
      value: "motorcycle",
      label: "Xe máy",
    },
    {
      value: "bike",
      label: "Xe đạp",
    },
  ];

  return (
    <div className="bg-background font-sans mx-auto">
      {/* Hero Banner */}
      <div className="relative h-64 bg-blue-500">
        <img
          src="/images/parkinglot.png"
          alt="Beautiful Vietnamese beach"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-blue-900/30"></div>

        {/* Main Heading */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
            GIẢI PHÁP ĐỖ XE THÔNG MINH - SMART PARKING
          </h1>
        </div>
      </div>

      {/* Search Box Card */}
      <div className="w-[80%] mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-background rounded-lg shadow-lg shadow-shadow overflow-hidden">
          <div className="bg-primary text-on-primary p-4 text-center font-bold text-lg">
            TÌM KIẾM ĐỊA ĐIỂM ĐỖ XE
          </div>

          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="col-span-1 md:col-span-2">
                <Popover
                  open={openPickAddress}
                  onOpenChange={setOpenPickAddress}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openPickAddress}
                      className="w-full h-full justify-between border-border bg-on-primary text-primary"
                    >
                      {value
                        ? addresses.find((address) => address.value === value)
                            ?.label
                        : "Select province..."}
                      <ChevronsUpDown className="text-primary" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-on-primary text-primary">
                    <Command className="">
                      <CommandInput
                        placeholder="Search framework..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {addresses.map((address) => (
                            <CommandItem
                              key={address.value}
                              value={address.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpenPickAddress(false);
                              }}
                              className="w-full"
                            >
                              {address.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  value === address.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <Popover open={openPickVehicle} onOpenChange={setOpenPickVehicle}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openPickVehicle}
                    className="col-span-1 md:col-span-2 h-full justify-between border-border bg-on-primary text-primary"
                  >
                    {vehicleValue
                      ? vehicles.find(
                          (vehicle) => vehicle.value === vehicleValue
                        )?.label
                      : "Select Vehicle..."}
                    <ChevronsUpDown className="text-primary" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-full p-2 bg-on-primary text-primary"
                  align="start"
                  sideOffset={5}
                  alignOffset={0}
                >
                  <Command>
                    <CommandInput
                      placeholder="Search framework..."
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No vehicle found.</CommandEmpty>
                      <CommandGroup>
                        {vehicles.map((vehicle) => (
                          <CommandItem
                            className="w-full"
                            key={vehicle.value}
                            value={vehicle.value}
                            onSelect={(currentValue) => {
                              setVehicleValue(
                                currentValue === vehicleValue
                                  ? ""
                                  : currentValue
                              );
                              setOpenPickVehicle(false);
                            }}
                          >
                            {vehicle.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                vehicleValue === vehicle.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <div className="md:col-span-1">
                <Link
                  to="/search"
                  className="flex justify-center items-center h-full w-full bg-primary hover:bg-primary-hover text-on-primary font-medium rounded-md transition duration-200"
                >
                  Tìm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-primary">
          SmartParking tại các thành phố lớn
        </h2>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="overflow-hidden rounded-lg shadow-md bg-white"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-bold text-center">{destination.name}</h3>
                  <p className="text-sm text-gray-600 text-center">
                    {destination.accommodations}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrow */}
          <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2">
            <ChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
