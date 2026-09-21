# Khatak

A route planner for the Cairo Metro. Pick a start and end station and it works out the fastest line, an estimated fare, and how many stops and changes the trip takes. It also carries a live read on Cairo rush hour, a full browsable map and list of every station, and a reference tab for Cairo's Monorail lines.

Live board styling: the fare, stop count, and change count render on an amber LED-style readout, in the spirit of a real departure board.

## Features

- Route lookup between any two Cairo Metro stations, computed with a shortest-path search over the actual line network (Line 1, Line 2, and Line 3 including its two branches at Kit Kat)
- Fare estimate based on the current Cairo Metro pricing tiers (by number of stations crossed)
- Rush-hour detection using the real Cairo clock, with a short Egyptian-Arabic line on the state of the ride
- Interactive line map: tap a station on any line to set it as your start or end point
- Full station list, grouped by line, with English and Arabic names
- English/Arabic toggle with full RTL layout, not just translated labels
- Monorail reference tab covering the East Nile line (operating) and West Nile line (under construction), with stations, areas, and fare zones
- No build step, no framework, no external runtime dependencies beyond Google Fonts

## Tech stack

Plain HTML, CSS, and JavaScript. No bundler, no package manager, no framework. Fonts are loaded from Google Fonts (JetBrains Mono, IBM Plex Sans, IBM Plex Sans Arabic); everything else runs client-side with no network calls.

## Project structure

```
.
├── index.html      Markup and page structure
├── style.css       All styling, including the RTL and dark-board theme
├── script.js       Station data, routing logic, and UI behavior
├── logo.png        Site logo, used in the header
└── favicon.png     Browser tab icon
```

## Data and accuracy

Station and line data reflects the Cairo Metro network as currently operating (Lines 1 through 3, 89 stations). Fares follow the Ministry of Transport's published tiers. The Monorail section is split into what is actually running (East Nile) and what is still under construction (West Nile); no fare is shown for the West Nile line since none has been announced yet.

Distances are counted in station-stops, not kilometers, so treat the fare and stop counts as close estimates rather than an official reading.

## Running locally

No install step. Open `index.html` directly in a browser, or serve the folder with any static file server:

```
npx serve .
```

## Deploying on Vercel

This is a static site, so no build command or output directory needs configuring. Push the folder to a Git repo, import it in Vercel, and leave the framework preset as "Other." Vercel will serve the files as-is.

## Author

Built by [Zeyad](https://zeyad-101.github.io).
