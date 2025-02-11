import SectionStore_List from "@/components/sections/stores/list";
import LayoutWrapper from "@/components/layout/layout-wrapper";
import { ILayoutWrapper_Action } from "@/components/layout/layout-wrapper/types";
import { IconPlus } from "@tabler/icons-react";
import { getStores } from "./actions";
import NuiAlert from "@/components/ui/misc/nui-alert";
import { API_STATUS } from "@/config/settings";
import { getApiStatusMessage } from "@/lib/apis";

const StoresPage = async () => {
  const addStore: ILayoutWrapper_Action = {
    label: "Add Store",
    href: "/shop/stores/add",
    icon: <IconPlus />,
  };

  const stores = await getStores();

  const composeMessage = (status: API_STATUS) => {
    const apiMessage = getApiStatusMessage(status);
    return (
      <NuiAlert
        title={apiMessage.title}
        message={apiMessage.description}
        status={apiMessage.status}
      />
    );
  };

  return (
    <LayoutWrapper title="Stores" action={addStore}>
      {stores.status === API_STATUS.OK ? (
        <SectionStore_List data={stores.data} />
      ) : (
        composeMessage(stores.status)
      )}
    </LayoutWrapper>
  );
};

export default StoresPage;
