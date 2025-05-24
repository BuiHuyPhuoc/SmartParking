import { LucideIcon } from "lucide-react";
import { JSX } from "react";

export interface ToastProps {
  message: string;
  description?: string;
}

export interface AddressDTO {
  id: number;
  name: string;
  name_en: string;
  full_name: string;
  full_name_en: string;
  latitude: number;
  longitude: number;
}

export interface APIGetProvincesResponse {
  data_name: string;
  data: AddressDTO[];
  error_text: string;
}

export interface LocationPickerProps {
  className?: string;
  onChange?: (
    province?: AddressDTO,
    district?: AddressDTO,
    ward?: AddressDTO
  ) => void;
}

export interface PageMarkProps {
  title: string;
  icon: LucideIcon;
  size?: number | 24;
}

export interface PageMarkNavigationItem {
  title: string;
  value: string;
  isPicked: boolean;
  icon?: LucideIcon;
  component?: JSX.Element;
}

export interface PageMarkNavigationProps {
  item: PageMarkNavigationItem[];
  header: string;
  className?: string;
  onClick?: (item: PageMarkNavigationItem) => void;
}

export interface LoginRequest {
  email: string;
  password: string;
  otp: string;
}

export interface LoginResponse {
  id: number;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  token: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface CheckOTPRequest {
  email: string;
  otp: string;
}

export interface PriceCardProps {
  icon: LucideIcon;
  title: string;
  prices: PriceCardItem[];
}

export interface PriceCardItem {
  title: string;
  price: number;
}

export interface PriceDTO {
  type: string;
  price: number;
  period: string;
}

export interface Lot {
  id: number;
  name: string;
  openTime: string;
  closeTime: string;
  district: string;
  ward: string;
  province: string;
  street: string;
  prices: PriceDTO[];
  imageUrl: string;
  amenities: Amenity[];
}

export interface LotFilter {
  province: string;
  ward: string;
  district: string;
  minPrice: number;
  maxPrice: number;
}

export interface OrderRequest {
  lotId: number;
  startTime: string;
  endTime: string;
  vehicleType: string;
}

export interface OrderResponse {
  startTime: string;
  endTime: string;
  status: string;
  totalPrice: number;
  timeRemain: string;
  url: string;
}

export interface ReviewRequest {
  email: string;
  lotId: number;
  rating: number;
  comment: string;
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  createdAt: string;
  user: UserReview;
}

export interface UserReview {
  id: number;
  fullName: string;
  role: string;
}

export interface Amenity {
  id?: number;
  amenityName: string;
}
