import { toast } from "sonner";
import {
  SuccessToast,
  WarningToast,
  InfoToast,
  DefaultToast,
} from "@/components/custom/CustomToast";

export const customToast = {
  success: (message: string, description?: string) =>
    toast.custom(() => (
      <SuccessToast message={message} description={description} />
    )),

  warning: (message: string, description?: string) =>
    toast.custom(() => (
      <WarningToast message={message} description={description} />
    )),

  info: (message: string, description?: string) =>
    toast.custom(() => (
      <InfoToast message={message} description={description} />
    )),

  default: (message: string, description?: string) =>
    toast.custom(() => (
      <DefaultToast message={message} description={description} />
    )),
};
