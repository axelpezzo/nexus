import { isArrayNotEmpty, isEmail, isNotEmpty } from "@/lib/validation";
import { TFormInitialValues } from "@/types";

export const initialValues_form = (data: any): TFormInitialValues => ({
  store_name: "",
  store_description: "",
  store_email: "",
  store_phone: "",
  store_address: {
    store_country: "",
    store_streetAddress1: "",
    store_streetAddress2: "",
    store_city: "",
    store_province: "",
    store_postalCode: "",
  },
  store_defaultCurrency: "",
  store_billingCountries: [],
  store_includeTaxInPrice: false,
  store_taxSettings: [],
  store_paymentMethods: [],
  store_timezone: "",
  store_languages: [],
  store_isDefault: false,
  store_activeStatus: true,
});

export const validationRules_form = {
  store_name: (value: string) =>
    isNotEmpty(value) ? null : "This field is required",

  store_email: (value: string) => (isEmail(value) ? null : "Invalid email"),

  store_defaultCurrency: (value: string) =>
    isNotEmpty(value) ? null : "This field is required",

  store_timezone: (value: string) =>
    isNotEmpty(value) ? null : "This field is required",

  store_billingCountries: (value: []) =>
    isArrayNotEmpty(value) ? null : "Select at least one element",

  store_languages: (value: []) =>
    isArrayNotEmpty(value) ? null : "Select at least one element",
};
