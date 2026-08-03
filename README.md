**English** | [中文](./README.zh-CN.md)

# BTCNav

A portal to the Bitcoin ecosystem — curated links for wallets, nodes, learning resources, and more.

**Website:** [https://btcnav.org](https://btcnav.org)

## About

BTCNav is a static navigation site that groups Bitcoin-related resources into four categories:

- `beginner`
- `bitcoin`
- `lightning`
- `new-things`

Built with React, Vite, and Material-UI. Content lives in JSON files and is deployed to GitHub Pages.

## Getting started

Requires Node.js 20+ (same as CI).

```bash
yarn
yarn dev      # local development server
yarn build    # production build → build/
yarn preview  # preview the production build
```

## Adding / updating resources

Most contributions only need JSON and image changes.

1. Add or edit an entry in the matching file under [`public/data/`](public/data/):
   - `beginner.json`
   - `bitcoin.json`
   - `lightning.json`
   - `new-things.json`
2. Make sure the tag already exists in [`public/data/tagList.json`](public/data/tagList.json) (`tag`, `tag_en`, `category`). Add a new tag there first if needed.
3. Put the logo under [`public/static/img-btc/`](public/static/img-btc/) and set `logo` or `image` in the JSON (path like `/img-btc/...`; the app serves it from `/static`).
4. Or open an issue with the [product submit template](.github/ISSUE_TEMPLATE/product-submit.md).

Example entry:

```json
{
  "name": "示例",
  "name_en": "Example",
  "desc": "",
  "desc_en": "",
  "url": "https://example.com/",
  "url_en": "",
  "tag": "社区",
  "tag_en": "Community",
  "logo": "",
  "image": "/img-btc/Community/example.png"
}
```

Notes:

- Empty `*_en` fields fall back to the primary (`name`, `url`, etc.) on the English UI.
- If `logo` is non-empty, it takes priority over `image`.

## Removing resources

1. Delete the full object from the matching category JSON (`beginner.json` / `bitcoin.json` / `lightning.json` / `new-things.json`).
2. If the entry has a dedicated logo under `public/static/img-btc/` and **no other entry references that path**, remove the image file too.
3. **Usually do not** remove tags from `tagList.json`. Keep unused tags unless you are sure the tag is permanently retired; this avoids sidebar churn.

## Conventions (for humans and agents)

- **Scope**: Content changes should normally touch only `public/data/*.json` and `public/static/img-btc/`. Do not edit `src/` or build config unless the task explicitly asks for it.
- **Placement**: Keep entries with the same `tag` together. Insert new items near existing ones for that tag (typically at the end of that tag group); do not scramble other groups.
- **Image folders**: Prefer the same subdirectory used by similar existing entries (e.g. `Community/`, `hot/`, `Software Wallet/`). Avoid inventing inconsistent folder names. Encode spaces in paths the same way existing entries do (e.g. `Bitcoin%20Optech.jpg`).
- **Fields & formatting**: Keep the existing field order and **tab indentation**. Empty `*_en` strings are fine (English UI falls back to the primary fields). Non-empty `logo` takes priority over `image`.
- **New tags**: Add `tag` / `tag_en` / `category` to `tagList.json` first. `category` must be one of `beginner` | `bitcoin` | `lightning` | `new-things`, then add the entry in the matching JSON file.
- **Done when**: JSON parses cleanly; if practical, run `yarn build` once to confirm the build still passes.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/` | React app (`App.jsx`, components, services) |
| `public/data/` | Navigation and tag JSON |
| `public/static/img-btc/` | Resource logos |
| `.github/workflows/gh-pages.yml` | GitHub Pages deploy |

## License

This project is licensed under the MIT License. Copyright (c) 2025 BTCNAV.org.

Full text: [LICENSE](LICENSE).

## Deploy

Pushes to `main` build and publish the site to GitHub Pages via [`.github/workflows/gh-pages.yml`](.github/workflows/gh-pages.yml). The badge below shows the latest workflow status (not a deploy button):

[![Deploy to GitHub Pages](https://github.com/btc-nav/www/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/btc-nav/www/actions/workflows/gh-pages.yml)
