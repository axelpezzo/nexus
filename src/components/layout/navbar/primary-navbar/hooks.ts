import { composePrimaryMenus } from "@/config/menu";
import { IPrimaryMenu_DataChildren, MENU_TYPE } from "@/config/menu/types";
import _ from "lodash";

export const useGetMenuChildren = (menuId: string) => {
  const items = _.find(composePrimaryMenus, {
    id: menuId,
    type: MENU_TYPE.MENU_TYPE_CHILDREN,
  }) as IPrimaryMenu_DataChildren;

  return items.children;
};
