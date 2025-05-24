import { Lot } from '@/lib/models';
import { BikeIcon, Bot, Camera, CarIcon, HelpCircleIcon, House, LucideIcon, Table, Wifi } from 'lucide-react';

const ListAmenities = ({ lotData, className }: { lotData: Lot, className: string }) => {
    return (
        <div className={`flex flex-wrap gap-2 mt-4 ${className}`}>
            {lotData.amenities.map((item, index) => {
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
    )
}


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
            return HelpCircleIcon;
    }
};

export default ListAmenities