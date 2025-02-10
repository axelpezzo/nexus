import { getDefaultServerURL } from "@/lib/utils";
import { DEFAULT_REVALIDATE_TAG } from "./const";
import { IOwnProps } from "./types";

export const queryApi = async ({
  endpoint,
  method = "GET",
  body,
}: IOwnProps) => {
  try {
    const res = await fetch(getDefaultServerURL(endpoint), {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
      },
      body: JSON.stringify(body),
      next: { tags: [DEFAULT_REVALIDATE_TAG] },
    });

    const response = await res.json();
    return response.data;
  } catch (error) {
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
};
