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
          { title: "Episode", field: "episode" },
          { title: "Title", field: "title" },
          {
            title: "Link",
            field: "link",
            render: (x) => (
              <Button href={x.link} target="_blank">
                <MusicNoteIcon />
              </Button>
            ),
          },
          {
            title: "IMDB",
            field: "imdb",
            render: (x) => (
              <Button href={x.imdb} target="_blank">
                <TheatersIcon />
              </Button>
            ),
          },
          { title: "Type", field: "type" },
          { title: "Score", field: "score" },
          { title: "Category", field: "category" },
          { title: "Genre", field: "genre" },
          { title: "Year", field: "year" },
          { title: "Broadcast", field: "broadcast" },
        ]}
        data={dataJson}
        title="Ratings"
      />
    </div>
  );
}
