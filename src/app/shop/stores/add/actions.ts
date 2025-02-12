"use server";

import { Store } from "@/app/api/mock/store/get/mock-data";
import { queryApi } from "@/services";
import { IQueryApiReturn } from "@/services/types";

export const postStore = async (
  store: any
): Promise<IQueryApiReturn<Store>> => {
  return await queryApi({
    endpoint: "/store/post",
    method: "POST",
    body: store,
  });
};
