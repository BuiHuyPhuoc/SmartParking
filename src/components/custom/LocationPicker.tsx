import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronsUpDown, Check } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils"; // hàm gộp className
import { AddressDTO, APIGetProvincesResponse, LocationPickerProps } from "@/lib/models";


const LocationPicker: React.FC<LocationPickerProps> = ({
  className,
  onChange,
}) => {
  const [provinces, setProvinces] = useState<AddressDTO[]>([]);
  const [districts, setDistricts] = useState<AddressDTO[]>([]);
  const [wards, setWards] = useState<AddressDTO[]>([]);

  const [province, setProvince] = useState<AddressDTO>();
  const [district, setDistrict] = useState<AddressDTO>();
  const [ward, setWard] = useState<AddressDTO>();

  const [openProvince, setOpenProvince] = useState(false);
  const [openDistrict, setOpenDistrict] = useState(false);
  const [openWard, setOpenWard] = useState(false);

  useEffect(() => {
    axios
      .get<APIGetProvincesResponse>("https://esgoo.net/api-tinhthanh/1/0.htm")
      .then((res) => setProvinces(res.data.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    setDistrict(undefined);
    setDistricts([]);
    setWard(undefined);
    setWards([]);

    if (!province) return;

    axios
      .get<APIGetProvincesResponse>(
        `https://esgoo.net/api-tinhthanh/2/${province.id}.htm`
      )
      .then((res) => setDistricts(res.data.data))
      .catch(console.error);
  }, [province]);

  useEffect(() => {
    setWard(undefined);
    setWards([]);
    if (!district) return;

    axios
      .get<APIGetProvincesResponse>(
        `https://esgoo.net/api-tinhthanh/3/${district.id}.htm`
      )
      .then((res) => setWards(res.data.data))
      .catch(console.error);
  }, [district]);

  useEffect(() => {
    onChange?.(
      province,
      district,
      ward
    );
  }, [province, district, ward, onChange]);

  const renderSelect = (
    label: string,
    items: AddressDTO[],
    selected?: AddressDTO,
    setSelected?: (item: AddressDTO) => void,
    open: boolean = false,
    setOpen?: (val: boolean) => void
  ) => (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-full justify-between border-border bg-on-primary text-primary"
        >
          {selected ? selected.full_name : label}
          <ChevronsUpDown className="text-primary ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-on-primary text-primary w-full h-80">
        <Command>
          <CommandInput
            placeholder={`Tìm ${label.toLowerCase()}...`}
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>
              Không tìm thấy {label.toLowerCase()} nào.
            </CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.full_name}
                  onSelect={(value) => {
                    const found = items.find((i) => i.full_name === value);
                    if (found && setSelected) {
                      setSelected(found);
                      setOpen?.(false);
                    }
                  }}
                  className="w-full"
                >
                  {item.full_name}
                  <Check
                    className={cn(
                      "ml-auto",
                      selected?.id === item.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );

  return (
    <div className={cn("flex flex-col md:flex-row gap-2 mb-6", className)}>
      <div className="md:w-1/3">
        {renderSelect(
          "Chọn tỉnh",
          provinces,
          province,
          setProvince,
          openProvince,
          setOpenProvince
        )}
      </div>
      <div className="md:w-1/3">
        {renderSelect(
          "Chọn huyện",
          districts,
          district,
          setDistrict,
          openDistrict,
          setOpenDistrict
        )}
      </div>
      <div className="md:w-1/3">
        {renderSelect(
          "Chọn phường",
          wards,
          ward,
          setWard,
          openWard,
          setOpenWard
        )}
      </div>
    </div>
  );
};

export default LocationPicker;
