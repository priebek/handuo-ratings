import { Options } from "material-table";
import { DataModel } from "../models/DataModel";

export function materialTableOptions(): Options<DataModel> | undefined {
  return {
    exportButton: true,
    grouping: true,
    headerStyle: {
      backgroundColor: "#01579b",
      color: "#FFF",
    },
    pageSize: 25,
    pageSizeOptions: [5, 25, 100, 1000],
  };
}
