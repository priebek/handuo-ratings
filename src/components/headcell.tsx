import DataModel from "../utility/datamodel";

interface HeadCell {
  disablePadding: boolean;
  id: keyof DataModel;
  label: string;
  numeric: boolean;
}

export const headCells: HeadCell[] = [
  {
    id: "episode",
    numeric: false,
    disablePadding: true,
    label: "Episode",
  },
  { id: "title", numeric: true, disablePadding: false, label: "Title" },
  { id: "link", numeric: true, disablePadding: false, label: "Link" },
  { id: "imdb", numeric: true, disablePadding: false, label: "IMDB" },
  { id: "type", numeric: true, disablePadding: false, label: "Type" },
  { id: "score", numeric: true, disablePadding: false, label: "Score" },
  { id: "category", numeric: true, disablePadding: false, label: "Category" },
  { id: "genre", numeric: true, disablePadding: false, label: "Genre" },
  { id: "year", numeric: true, disablePadding: false, label: "Year" },
  { id: "broadcast", numeric: true, disablePadding: false, label: "Broadcast" },
];
