import { composePrimaryMenus } from "@/config/menu";
import { IPrimaryMenu_DataChildren, MENU_TYPE } from "@/config/menu/types";
import _ from "lodash";
import { useEffect, useRef } from "react";

export const useGetMenuChildren = (menuId: string) => {
  const items = _.find(composePrimaryMenus, {
    id: menuId,
    type: MENU_TYPE.MENU_TYPE_CHILDREN,
  }) as IPrimaryMenu_DataChildren;

  return items.children;
};

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return ref;
};
