"use client";
import UiTable from "@/components/ui/table";
import { ISectionStore_List_Props } from "./types";
import { Store } from "@/app/api/mock/store/get/mock-data";
import { bulkActions, columns, rowActions } from "./_config";
import { redirect } from "next/navigation";
import { deleteStore, duplicateStore } from "@/app/shop/stores/actions";
import { API_STATUS } from "@/config/settings";
import { notifications } from "@mantine/notifications";
import { getApiStatusMessage } from "@/lib/apis";

const SectionStore_List = ({ data }: ISectionStore_List_Props) => {
  const handleEdit = (item: Store) => {
    redirect("/shop/stores/edit/" + item.id);
  };

  const handleDuplicate = async (item: Store) => {
    const result = await duplicateStore(item.id);

    if (result.status === API_STATUS.OK) {
      notifications.show({
        title: "Store duplicated successfully",
        message: "The Store with ID 123 has been duplicated successfully.",
        color: "green",
      });
    } else {
      const apiMessage = result.status && getApiStatusMessage(result.status);
      notifications.show({
        title: apiMessage?.title,
        message: apiMessage?.description,
        color: apiMessage?.color,
      });
    }
  };

  const handleDelete = async (item: Store) => {
    const result = await deleteStore(item.id);

    if (result.status === API_STATUS.OK) {
      notifications.show({
        title: "Store deleted successfully",
        message: "The Store with ID 123 has been deleted successfully.",
        color: "green",
      });
    } else {
      const apiMessage = result.status && getApiStatusMessage(result.status);
      notifications.show({
        title: apiMessage?.title,
        message: apiMessage?.description,
        color: apiMessage?.color,
      });
    }
  };

  return (
    <UiTable<Store>
      data={data}
      columns={columns}
      bulkActions={bulkActions}
      totalItems={data.length}
      rowActions={rowActions({
        onEdit: handleEdit,
        onDuplicate: handleDuplicate,
        onDelete: handleDelete,
      })}
    />
  );
};

export default SectionStore_List;
