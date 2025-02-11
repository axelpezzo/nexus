"use server";

import { Store } from "@/app/api/mock/stores/get/mock-data";
import { queryApi } from "@/services";
import { IQueryApiReturn } from "@/services/types";

export const postStore = async (
  store: any
): Promise<IQueryApiReturn<Store>> => {
  return await queryApi({
    endpoint: "stores/post",
    method: "POST",
    body: store,
  });
};
