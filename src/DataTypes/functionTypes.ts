// Main event functions eg, Corporate events. These appear in the top app bar.
export const functionTypes = [
  "corporate-events",
  "party",
  "wedding",
  "event-services"
];

export interface DisplayFunctionTypes {
  [key: string]: string;
}

// DISPLAYED ALONG THE TOP MENU #MENU
export const displayFunctionTypes: DisplayFunctionTypes = {
  "corporate-events": "Corporate Events",
  party: "Party",
  wedding: "Wedding",
  "event-services": "Event Services"
};
