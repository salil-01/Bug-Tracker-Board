export const itemsFromBackend = [
  { id: "AW0546", name: "First task" },
  { id: "JV6275", name: "Second task" },
  { id: "ZM5019", name: "Third task" },
  { id: "TZ3141", name: "Fourth task" },
  { id: "RN8828", name: "Fifth task" },
];

export const columnsFromBackend = {
  ["RL2118"]: {
    name: "CRITICAL SEVERITY",
    items: itemsFromBackend,
    bg: "red",
  },
  ["IX5270"]: {
    name: "MAJOR SEVERITY",
    items: [],
    bg: "yellow",
  },
  ["QY6864"]: {
    name: "MEDIUM SEVERITY",
    items: [],
    bg: "blue",
  },
  ["QW5430"]: {
    name: "LOW SEVERITY",
    items: [],
    bg: "green",
  },
};
