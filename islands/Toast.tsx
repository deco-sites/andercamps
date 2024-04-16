import { toast, ToastContainer, ToastContainerProps } from "toastify";

export default function Toast({ ...props }: ToastContainerProps) {
  // deno-lint-ignore no-explicit-any
  const ToastAlert = ToastContainer as any;

  return <ToastAlert {...props} />;
}
