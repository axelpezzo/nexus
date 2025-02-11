"use server";

import { Store } from "@/app/api/mock/stores/get/mock-data";
import { queryApi } from "@/services";
import { IQueryApiReturn } from "@/services/types";

export const getStores = async (): Promise<IQueryApiReturn<Store[]>> => {
  return await queryApi<Store[]>({
    endpoint: "/stores/get",
    method: "GET",
  });
};
