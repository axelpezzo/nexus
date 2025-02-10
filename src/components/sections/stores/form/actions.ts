"use server";

import { queryApi } from "@/services";

export const postStore = async (store: any) => {
  await queryApi({
    endpoint: "stores",
    method: "POST",
    body: {},
  });
};
