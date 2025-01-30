import { Dispatch, SetStateAction } from "react";

export const sortingHelper = <T>(
  data: Array<T>,
  key: string,
  direction: "asc" | "desc",
  callback: Dispatch<SetStateAction<T[]>>
) => {
  const sorted = [...data].sort((a, b) => {
    if (a[key as keyof T] < b[key as keyof T])
      return direction === "asc" ? -1 : 1;
    if (a[key as keyof T] > b[key as keyof T])
      return direction === "asc" ? 1 : -1;
    return 0;
  });

  callback(sorted);
};
