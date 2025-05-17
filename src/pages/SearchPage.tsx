import LocationPicker from "@/components/custom/LocationPicker";
import { ItemSearch } from "@/components/custom/LotItem";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { AddressDTO } from "@/lib/models";
import { useGetLotByFilter } from "@/services/hook/useLot";
import { useCallback, useMemo, useState } from "react";

export default function SearchPage() {
  const [searchMaxValue, setSearchMaxValue] = useState(100000);
  const [location, setLocation] = useState({ province: "", district: "", ward: "" });

  const filter = useMemo(() => ({
    province: location.province,
    district: location.district,
    ward: location.ward,
    minPrice: 0,
    maxPrice: searchMaxValue
  }), [location, searchMaxValue]);

  const handleLocationChange = useCallback(
    (province?: AddressDTO, district?: AddressDTO, ward?: AddressDTO) => {
      const newLocation = {
        province: province?.full_name || "",
        district: district?.full_name || "",
        ward: ward?.full_name || ""
      };

      setLocation((prev) => {
        if (
          prev.province === newLocation.province &&
          prev.district === newLocation.district &&
          prev.ward === newLocation.ward
        ) {
          return prev;
        }
        return newLocation;
      });
    },
    []
  );

  const { data: listLot, refetch } = useGetLotByFilter(filter);

  const handleSearch = () => {
    refetch();
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <LocationPicker
          className="col-span-1 md:col-span-10"
          onChange={handleLocationChange}
        />
        <Button className="col-span-1 md:col-span-2" onClick={handleSearch}> Tìm </Button>
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
              className="mb-4 bg-primary-hover selection:bg-primary rounded-lg"
              onValueChange={(value) => setSearchMaxValue(value[0])}
            />
            <div className="flex justify-between">
              <div className="border border-border text-primary rounded-full px-4 py-1 text-sm">
                0
              </div>
              <div className="border border-border text-primary rounded-full px-4 py-1 text-sm">
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
          {listLot ? listLot.map((item, idx) => {return <ItemSearch item={item} index={idx} />}) : null}
        </div>
      </div>
    </div>
  );
}

