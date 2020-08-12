import DataModel from "../utility/datamodel";

interface HeadCell {
  disablePadding: boolean;
  id: keyof DataModel;
  label: string;
  numeric: boolean;
}

export const headCells: HeadCell[] = [
  {
    id: "title",
    numeric: false,
    disablePadding: true,
    label: "Title",
  },
  { id: "episode", numeric: true, disablePadding: false, label: "Episode" },
  { id: "link", numeric: true, disablePadding: false, label: "Link" },
  { id: "title", numeric: true, disablePadding: false, label: "Title" },
];
