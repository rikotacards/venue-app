// Main event functions eg, Corporate events. These appear in the top app bar.
export const functionTypes = [
//   "home",
  "corporate-events",
  "party",
  "wedding",
//   "event-services"
];

export interface DisplayFunctionTypes {
  [key: string]: string;
}

// DISPLAYED ALONG THE TOP MENU #MENU
export const displayFunctionTypes: DisplayFunctionTypes = {
  home: "Home",
  "corporate-events": "Corporate",
  party: "Party",
  wedding: "Wedding",
  "event-services": "Event Services"
};
