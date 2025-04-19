import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { PopoverContent } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import axios from "axios";
import {
  Bike,
  Car,
  Check,
  ChevronsUpDown,
  Home,
  Package,
  Star,
  Webcam,
  Wifi,
} from "lucide-react";
import { useEffect, useState } from "react";

interface AddressDTO {
  id: number;
  name: string;
  name_en: string;
  full_name: string;
  full_name_en: string;
  latitude: number;
  longitude: number;
}

interface APIGetProvincesResponse {
  data_name: string;
  data: AddressDTO[];
  error_text: string;
}

export default function SearchPage() {
  const [searchMaxValue, setSearchMaxValue] = useState(0);

  const [province, setProvince] = useState<AddressDTO>();
  const [openPickProvince, setOpenPickProvince] = useState(false);
  const [provinces, setProvinces] = useState<AddressDTO[]>([]);

  const [district, setDistrict] = useState<AddressDTO>();
  const [openPickDistrict, setOpenPickDistrict] = useState(false);
  const [districts, setDistricts] = useState<AddressDTO[]>([]);

  const [ward, setWard] = useState<AddressDTO>();
  const [openPickWard, setOpenPickWard] = useState(false);
  const [wards, setWards] = useState<AddressDTO[]>([]);

  useEffect(() => {
    axios
      .get<APIGetProvincesResponse>("https://esgoo.net/api-tinhthanh/1/0.htm")
      .then((response) => {
        console.log(response.data);
        setProvinces(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching provinces:", error);
      });
  }, []);

  useEffect(() => {
    setDistrict(undefined);

    if (!province) {
      setDistricts([]);
      return;
    }

    axios
      .get<APIGetProvincesResponse>(
        `https://esgoo.net/api-tinhthanh/2/${province.id}.htm`
      )
      .then((response) => {
        console.log(response.data);
        setDistricts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching districts:", error);
        setDistricts([]);
      });
  }, [province]);

  useEffect(() => {
    setWard(undefined);
    if (!district) {
      setWards([]);
      return;
    }

    axios
      .get<APIGetProvincesResponse>(
        `https://esgoo.net/api-tinhthanh/3/${district.id}.htm`
      )
      .then((response) => {
        console.log(response.data);
        setWards(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching wards:", error);
        setWards([]);
      });
  }, [district]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-2 mb-6">
        <div className="md:w-1/3">
          <Popover open={openPickProvince} onOpenChange={setOpenPickProvince}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openPickProvince}
                className="w-full h-full justify-between border-border bg-on-primary text-primary"
              >
                {province
                  ? provinces.find((p) => p.id === province.id)?.full_name
                  : "Chọn tỉnh..."}
                <ChevronsUpDown className="text-primary ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-on-primary text-primary w-full h-80">
              <Command>
                <CommandInput placeholder="Tìm tỉnh..." className="h-9" />
                <CommandList>
                  <CommandEmpty>Không tìm thấy tỉnh nào.</CommandEmpty>
                  <CommandGroup>
                    {provinces.map((p) => (
                      <CommandItem
                        key={p.id}
                        value={p.full_name}
                        onSelect={(value) => {
                          setProvince(
                            provinces.find((p) => p.full_name === value)
                          );
                          setOpenPickProvince(false);
                        }}
                        className="w-full"
                      >
                        {p.full_name}
                        <Check
                          className={cn(
                            "ml-auto",
                            province === p ? "opacity-100" : "opacity-0"
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

        <div className="md:w-1/3">
          <Popover open={openPickDistrict} onOpenChange={setOpenPickDistrict}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openPickDistrict}
                className="w-full h-full justify-between border-border bg-on-primary text-primary"
              >
                {district
                  ? districts.find((p) => p.id === district.id)?.full_name
                  : "Chọn tỉnh..."}
                <ChevronsUpDown className="text-primary ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-on-primary text-primary w-full h-80">
              <Command>
                <CommandInput placeholder="Tìm tỉnh..." className="h-9" />
                <CommandList>
                  <CommandEmpty>Không tìm thấy tỉnh nào.</CommandEmpty>
                  <CommandGroup>
                    {districts.map((p) => (
                      <CommandItem
                        key={p.id}
                        value={p.full_name}
                        onSelect={(value) => {
                          setDistrict(
                            districts.find((p) => p.full_name === value)
                          );
                          setOpenPickDistrict(false);
                        }}
                        className="w-full"
                      >
                        {p.full_name}
                        <Check
                          className={cn(
                            "ml-auto",
                            district === p ? "opacity-100" : "opacity-0"
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
        <div className="md:w-1/3">
          <Popover open={openPickWard} onOpenChange={setOpenPickWard}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openPickWard}
                className="w-full h-full justify-between border-border bg-on-primary text-primary"
              >
                {ward
                  ? wards.find((p) => p.id === ward.id)?.full_name
                  : "Chọn phường..."}
                <ChevronsUpDown className="text-primary ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-on-primary text-primary w-full h-80">
              <Command>
                <CommandInput placeholder="Tìm phường..." className="h-9" />
                <CommandList>
                  <CommandEmpty>Không tìm thấy phường xã nào.</CommandEmpty>
                  <CommandGroup>
                    {wards.map((p) => (
                      <CommandItem
                        key={p.id}
                        value={p.full_name}
                        onSelect={(value) => {
                          setWard(
                            wards.find((p) => p.full_name === value)
                          );
                          setOpenPickWard(false);
                        }}
                        className="w-full"
                      >
                        {p.full_name}
                        <Check
                          className={cn(
                            "ml-auto",
                            ward === p ? "opacity-100" : "opacity-0"
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
        <Button className="bg-primary text-on-primary hover:bg-primary-hover hover:text-on-primary-hover">
          Tìm
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters */}
        <div className="w-full md:w-64 space-y-8">
          <div className="bg-background p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary">Khoảng giá</h3>
            <Slider
              defaultValue={[searchMaxValue]}
              max={500000}
              step={10000}
              className="mb-4 bg-primary rounded-lg"
              onValueChange={(value) => setSearchMaxValue(value[0])}
            />
            <div className="flex justify-between">
              <div className="border rounded-full px-4 py-1 text-sm">0</div>
              <div className="border rounded-full px-4 py-1 text-sm">
                {searchMaxValue}
              </div>
            </div>
          </div>

          <div className="bg-background p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary">Tiện ích</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="wifi"
                  className="selection:bg-primary bg-on-primary text-on-primary border border-border"
                />
                <label
                  htmlFor="wifi"
                  className="text-sm font-medium text-primary"
                >
                  Wifi
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="camera"
                  className="selection:bg-primary bg-on-primary text-on-primary border border-border"
                />
                <label
                  htmlFor="camera"
                  className="text-sm font-medium text-primary"
                >
                  Camera
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="storage"
                  className="selection:bg-primary bg-on-primary text-on-primary border border-border"
                />
                <label
                  htmlFor="storage"
                  className="text-sm font-medium text-primary"
                >
                  Tủ giữ đồ
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="internal"
                  className="selection:bg-primary bg-on-primary text-on-primary border border-border"
                />
                <label
                  htmlFor="internal"
                  className="text-sm font-medium text-primary"
                >
                  Trong nhà
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="auto"
                  className="selection:bg-primary bg-on-primary text-on-primary border border-border"
                />
                <label
                  htmlFor="auto"
                  className="text-sm font-medium text-primary"
                >
                  Tự động
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 space-y-6">
          {/* Listing Item */}
          {[1, 2].map((item) => (
            <Card key={item} className="overflow-hidden border-none p-0">
              <div className="h-full flex flex-col md:flex-row p-2 md:p-4 bg-background rounded-lg shadow-md">
                <div className="md:w-1/3 rounded-lg overflow-hidden">
                  <img
                    src="/images/hotel.png"
                    alt="Accommodation"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h2 className="text-xl font-bold">Bãi đỗ Tân Sơn Nhất</h2>
                      <p className="text-gray-600">
                        Tân Bình, Thành phố Hồ Chí Minh
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xl font-bold ml-1">4.9</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Bike className="w-5 h-5" />
                        <span>Xe máy</span>
                      </div>
                      <span className="font-medium">20.000 VND/Ngày</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Car className="w-5 h-5" />
                        <span>Xe hơi</span>
                      </div>
                      <span className="font-medium">50.000 VND/Ngày</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center mt-2">
                      <Wifi className="w-12 h-12 bg-[#F2EFE7] p-2 rounded" />
                      {/* <span className="text-lg">Wifi</span> */}
                    </div>
                    <div className="flex flex-col items-center mt-2">
                      <Webcam className="w-12 h-12 bg-teal-100 p-2 rounded" />
                      {/* <span className="text-lg">Camera</span> */}
                    </div>
                    <div className="flex flex-col items-center mt-2 ">
                      <Home className="w-12 h-12 bg-[#F2EFE7] p-2 rounded" />
                      {/* <span className="text-lg">Trong nhà</span> */}
                    </div>
                    <div className="flex flex-col items-center mt-2">
                      <Package className="w-12 h-12 bg-teal-100 p-2 rounded" />
                      {/* <span className="text-lg">Tủ đồ</span> */}
                    </div>
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
