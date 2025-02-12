"use server";

import { Store } from "@/app/api/mock/store/get/mock-data";
import { queryApi } from "@/services";
import { IQueryApiReturn } from "@/services/types";

export const getStores = async (): Promise<IQueryApiReturn<Store[]>> => {
  return await queryApi<Store[]>({
    endpoint: "/store/get",
    method: "GET",
  });
};

export const duplicateStore = async (
  id: string
): Promise<IQueryApiReturn<Store[]>> => {
  return await queryApi<Store[]>({
    endpoint: "/store/duplicate/" + id,
    method: "POST",
  });
};

export const deleteStore = async (
  id: string
): Promise<IQueryApiReturn<Store[]>> => {
  return await queryApi<Store[]>({
    endpoint: "/store/delete/" + id,
    method: "DELETE",
  });
};
