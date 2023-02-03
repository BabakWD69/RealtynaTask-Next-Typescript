import { ToastTypes } from "../enums/toast-types.enum";
import { toast } from "react-toastify";

type IToastProp =
  | "top-center"
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left"
  | undefined;

export const showToast = (
  message: Array<any>,
  type: string,
  position: IToastProp = "top-center"
) => {
  message.forEach((mes) => {
    switch (type) {
      case ToastTypes.success:
        toast.success(mes, { position: position });
        break;
      case ToastTypes.error:
        toast.error(mes, { position: position });
        break;
      case ToastTypes.warning:
        toast.warning(mes, { position: position });
        break;
      case ToastTypes.info:
        toast.info(mes, { position: position });
        break;
      default:
        break;
    }
  });
};
