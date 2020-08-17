import React from "react";
import { Button } from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { Column } from "material-table";
import { DataModel } from "../models/DataModel";
import moment from "moment";

function formatDate(date: string) {
  return moment(date, "dd.MM.yyyy").format("DD-MM-YYYY");
}

export function materialTableColumns(): Column<DataModel>[] {
  return [
    {
      title: "Episode",
      field: "episode",
      type: "numeric",
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
      defaultSort: "asc",
      type: "datetime",
      render: (x) => formatDate(x["broadcast"]),
      cellStyle: { whiteSpace: "nowrap" },
    },
  ];
}
