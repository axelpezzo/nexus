import { composerDefaultApiURL } from "@/lib/server";
import { IOwnProps, IQueryApiReturn } from "./types";

export const queryApi = async <T>({
  endpoint,
  method = "GET",
  body,
}: IOwnProps): Promise<IQueryApiReturn<T>> => {
  try {
    const res = await fetch(composerDefaultApiURL(endpoint), {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
      },
      body: body ? JSON.stringify(body) : undefined,
      next: { revalidate: 0 },
      cache: "no-store",
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
