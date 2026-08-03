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
