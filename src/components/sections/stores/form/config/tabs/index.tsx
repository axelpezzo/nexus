import { UseFormReturnType } from "@mantine/form";
import SubForm_1 from "../../sub-form/sub-form-1";
import SubForm_2 from "../../sub-form/sub-form-2";
import SubForm_3 from "../../sub-form/sub-form-3";
import { TFormInitialValues } from "@/types";

export const tabsConfig = (
  form: UseFormReturnType<
    TFormInitialValues,
    (values: TFormInitialValues) => TFormInitialValues
  >
) => [
  {
    default: true,
    value: "info",
    label: "Info",
    children: <SubForm_1 form={form} />,
  },
  {
    value: "billing_payments",
    label: "Billing & Payments",
    children: <SubForm_2 form={form} />,
  },
  {
    value: "localization",
    label: "Localization",
    children: <SubForm_3 form={form} />,
  },
];
