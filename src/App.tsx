import React from "react";
import dataJson from "./data.json";
import MaterialTable from "material-table";
import { materialTableOptions } from "./methods/materialTableOptions";
import { materialTableColumns } from "./methods/materialTableColumns";
import { Button } from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";
import { DataModel } from "./models/DataModel";

export default function App(): React.ReactElement {
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        options={materialTableOptions()}
        columns={materialTableColumns()}
        data={dataJson}
        title="Ratings"
        actions={[
          {
            icon: "theaters",
            tooltip: "IMDB",
            onClick: (event, data) => alert("Open " + (data as DataModel).imdb),
          },
        ]}
        components={{
              Action: (props) => (
            <Button
              // eslint-disable-next-line react/prop-types
              href={props.data.imdb}
              target="_blank"
              // eslint-disable-next-line react/prop-types
              onClick={(event) => props.action.onClick(event, props.data)}
            >
              <TheatersIcon />
            </Button>
          ),
        }}
      />
    </div>
  );
}
