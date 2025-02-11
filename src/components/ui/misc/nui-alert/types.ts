export type NuiAlertStatus = "success" | "info" | "warning" | "error";

export interface NuiAlert_Props {
  status: NuiAlertStatus;
  title: string;
  message?: string;
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
}
