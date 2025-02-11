import { getDefaultServerURL } from "@/lib/server";
import { DEFAULT_REVALIDATE_TAG } from "./const";
import { IOwnProps, IQueryApiReturn } from "./types";

export const queryApi = async <T>({
  endpoint,
  method = "GET",
  body,
}: IOwnProps): Promise<IQueryApiReturn<T>> => {
  try {
    const res = await fetch(getDefaultServerURL(endpoint), {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
      },
      body: body ? JSON.stringify(body) : undefined,
      next: { tags: [DEFAULT_REVALIDATE_TAG] },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const response = await res.json();

    return { data: response.data as T, status: response.status };
  } catch (error) {
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
};
