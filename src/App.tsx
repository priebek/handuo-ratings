import React from "react";
import dataJson from "./data.json";
import { Button } from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MaterialTable from "material-table";

export default function App() {
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        options={{
          exportButton: true,
          grouping: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
          pageSize: 25,
          pageSizeOptions: [5, 25, 100, 1000],
        }}
        columns={[
          {
            title: "Episode",
            field: "episode",
            type: "numeric",
            defaultSort: "asc",
            align: "left",
            cellStyle: { whiteSpace: "nowrap" },
          },
          {
            title: "Title",
            field: "title",
            cellStyle: { whiteSpace: "nowrap" },
          },
          {
            title: "Link",
            field: "link",
            render: (x) => (
              <Button href={x.link} target="_blank">
                <MusicNoteIcon />
              </Button>
            ),
            cellStyle: { whiteSpace: "nowrap" },
          },
          {
            title: "IMDB",
            field: "imdb",
            render: (x) => (
              <Button href={x.imdb} target="_blank">
                <TheatersIcon />
              </Button>
            ),
            cellStyle: { whiteSpace: "nowrap" },
          },
          { title: "Type", field: "type", cellStyle: { whiteSpace: "nowrap" } },
          {
            title: "Score",
            field: "score",
            cellStyle: { whiteSpace: "nowrap" },
          },
          {
            title: "Category",
            field: "category",
            cellStyle: { whiteSpace: "nowrap" },
          },
          {
            title: "Genre",
            field: "genre",
            cellStyle: { whiteSpace: "nowrap" },
          },
          { title: "Year", field: "year", cellStyle: { whiteSpace: "nowrap" } },
          {
            title: "Broadcast",
            field: "broadcast",
            type: "date",
            defaultSort: "asc",
            cellStyle: { whiteSpace: "nowrap" },
          },
        ]}
        data={dataJson}
        title="Ratings"
      />
    </div>
  );
}
