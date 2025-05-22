import { Lot } from "@/lib/models";
import { MoneyConvert, StringConvert } from "@/services/utils/convert";
import { getMinPricesByType } from "@/services/utils/lotGetPridce";
import { Bike, Car, Home, Package, Star, Webcam, Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "../ui/card";
import { useGetReviewByLotId } from "@/services/hook/useLot";


export const ItemSearch = ({ item, index }: { item: Lot, index: number }) => {
    const navigate = useNavigate();
    const minPrices = getMinPricesByType(item.prices);
    const resultArray = Object.values(minPrices);

    const handleClick = () => {
        navigate(`/detail/${item.id}`);
    };

    const { data: reviewByLotId } = useGetReviewByLotId(item.id);

    // Calculate the average rating
    const totalRating = reviewByLotId?.reduce((acc, review) => acc + review.rating, 0) || 0;
    const averageRating = reviewByLotId?.length ? (totalRating / reviewByLotId.length).toFixed(1) : 0;


    return (
        <Card key={index} className="overflow-hidden border-none p-0" onClick={handleClick} >
            <div className="h-full flex flex-col md:flex-row p-2 md:p-4 bg-background rounded-lg shadow-md">
                <div className="md:w-1/3 rounded-lg overflow-hidden">\
                    <img
                        src={item.imageUrl || "/images/hotel.png"}
                        alt="Accommodation"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-4 md:p-6 flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h2 className="text-primary text-xl font-bold">
                                {item.name}
                            </h2>
                            <p className="text-primary">
                                {item.ward}, {item.district}, {item.province}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="text-primary text-xl font-bold ml-1">
                                {averageRating}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-2 mb-4">
                        {resultArray.map((price, idx) => (
                            <div key={idx} className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    {price.type === "bike" ? (
                                        <Bike className="w-5 h-5 text-primary" />
                                    ) : price.type === "car" ? (
                                        <Car className="w-5 h-5 text-primary" />
                                    ) : price.type === "home" ? (
                                        <Home className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Package className="w-5 h-5 text-primary" />
                                    )}
                                    <span className="text-primary">{StringConvert.Capitalize(price.type)}</span>
                                </div>
                                <span className="text-primary font-medium">
                                    {MoneyConvert.From(price.price, "VNĐ")}/{price.period}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col items-center mt-2">
                            <Wifi className="w-12 h-12 bg-[#F2EFE7] p-2 rounded" />
                        </div>
                        <div className="flex flex-col items-center mt-2">
                            <Webcam className="w-12 h-12 bg-teal-100 p-2 rounded" />
                        </div>
                        <div className="flex flex-col items-center mt-2 ">
                            <Home className="w-12 h-12 bg-[#F2EFE7] p-2 rounded" />
                        </div>
                        <div className="flex flex-col items-center mt-2">
                            <Package className="w-12 h-12 bg-teal-100 p-2 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </Card >
    );
}

