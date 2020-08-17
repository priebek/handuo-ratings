import React from "react";
import dataJson from "./data.json";
import MaterialTable from "material-table";
import { materialTableOptions } from "./methods/materialTableOptions";
import { materialTableColumns } from "./methods/materialTableColumns";

export default function App() {
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        options={materialTableOptions()}
        columns={materialTableColumns()}
        data={dataJson}
        title="Ratings"
      />
    </div>
  );
}
