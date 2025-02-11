"use server";

import { Store } from "@/app/api/mock/stores/get/mock-data";
import { queryApi } from "@/services";

export const postStore = async (store: any) => {
  await queryApi({
    endpoint: "stores/post",
    method: "POST",
    body: store,
  });
};
