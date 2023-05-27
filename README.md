#  oMoonLoss
> Personal front page v2

MoonLoss means "The moon forgot to be full".

Hosted on [Cloudflare](https://www.cloudflare.com) [Pages](https://pages.cloudflare.com), made with [React.js](https://reactjs.org) & [Vite](https://vitejs.dev).



## Terms

- Project: List of collections, defined in a single file
- Collection: List of buckets
- Bucket: List of bookmarks
- Bookmark: A link with optional notes

## Features

- Easily sharable as a single HTML file
- Print layout, including URLs

## Shortcuts

- Esc: Reset filter

## Issues

- Chrome doesn't allow opening [multiple links at once](https://stackoverflow.com/questions/16749907/window-open-behaviour-in-chrome-tabs-windows).

## Build

1. Update version of `app`.
2. Run `yarn build` for `app`.
3. Check if `cli` changelog is up-to-date.
4. If it's a `cli`-only change, update version in template.
5. Make sure no CRLF line endings are used in CLI files.
6. `npm publish` + GitHub Release (`releasec`).

