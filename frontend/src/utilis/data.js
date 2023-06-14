export const critItems = [
  { id: "AW0546", name: "First Bug" },
  { id: "JV6275", name: "Second Bug" },
];
export const majItems = [
  { id: "ZM5019", name: "Third Bug" },
  { id: "TZ3141", name: "Fourth Bug" },
];
export const medItems = [
  { id: "RN8828", name: "Fifth Bug" },
  { id: "WZ0068", name: "Sixth Bug" },
];
export const lowItems = [
  { id: "AZ5902", name: "Seventh Bug" },
  { id: "IR0291", name: "Eighth Bug" },
];
export const columnsFromBackend = {
  ["RL2118"]: {
    name: "CRITICAL SEVERITY",
    items: critItems,
    bg: "red",
  },
  ["IX5270"]: {
    name: "MAJOR SEVERITY",
    items: majItems,
    bg: "yellow",
  },
  ["QY6864"]: {
    name: "MEDIUM SEVERITY",
    items: medItems,
    bg: "blue",
  },
  ["QW5430"]: {
    name: "LOW SEVERITY",
    items: lowItems,
    bg: "green",
  },
};
