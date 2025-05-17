import { ToastProps } from "@/lib/models";
import { AlertCircle, Bell, CheckCircle, Info, X } from "lucide-react";

export function SuccessToast({ message, description }: ToastProps) {
  return (
    <div className="flex items-start gap-3 p-4 bg-success rounded-md shadow-md">
      <CheckCircle className="h-5 w-5 text-black mt-0.5" />
      <div className="flex-1">
        <h3 className="font-medium text-black">{message}</h3>
        {description && (
          <p className="text-sm text-black mt-1">{description}</p>
        )}
      </div>
      <button className="text-success hover:text-green-700">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function WarningToast({ message, description }: ToastProps) {
  return (
    <div className="flex items-start gap-3 p-4 bg-warning rounded-md shadow-md">
      <AlertCircle className="h-5 w-5 text-black mt-0.5" />
      <div className="flex-1">
        <h3 className="font-medium text-amber-900">{message}</h3>
        {description && (
          <p className="text-sm text-amber-700 mt-1">{description}</p>
        )}
      </div>
      <button className="text-warning hover:text-amber-700">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function InfoToast({ message, description }: ToastProps) {
  return (
    <div className="flex items-start gap-3 p-4 bg-info rounded-md shadow-md">
      <Info className="h-5 w-5 text-on-info mt-0.5" />
      <div className="flex-1">
        <h3 className="font-medium text-on-info">{message}</h3>
        {description && (
          <p className="text-sm text-on-info mt-1">{description}</p>
        )}
      </div>
      <button className="text-info hover:text-on-info">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function DefaultToast({ message, description }: ToastProps) {
  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-md shadow-md">
      <Bell className="h-5 w-5 text-gray-500 mt-0.5" />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{message}</h3>
        {description && (
          <p className="text-sm text-gray-700 mt-1">{description}</p>
        )}
      </div>
      <button className="text-gray-500 hover:text-gray-700">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}