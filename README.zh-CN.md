[English](./README.md) | **中文**

# BTCNav

比特币生态资源导航门户 —— 聚合钱包、节点、学习资料等精选链接。

**网站：** [https://btcnav.org](https://btcnav.org)

## 关于

BTCNav 是一个静态导航站点，将比特币相关资源分为四个分类：

- `beginner`（入门）
- `bitcoin`（比特币）
- `lightning`（闪电网络）
- `new-things`（新事物）

技术栈为 React、Vite、Material-UI。内容存放在 JSON 中，通过 GitHub Pages 部署。

## 本地启动

需要 Node.js 20+（与 CI 一致）。

```bash
yarn
yarn dev      # 本地开发服务器
yarn build    # 生产构建 → build/
yarn preview  # 预览生产构建
```

## 添加 / 更新资源

多数贡献只需改 JSON 和图片。

1. 在 [`public/data/`](public/data/) 下对应文件中新增或修改条目：
   - `beginner.json`
   - `bitcoin.json`
   - `lightning.json`
   - `new-things.json`
2. 确认标签已存在于 [`public/data/tagList.json`](public/data/tagList.json)（`tag`、`tag_en`、`category`）。若是新标签，先在此文件中添加。
3. 将 Logo 放到 [`public/static/img-btc/`](public/static/img-btc/)，并在 JSON 中填写 `logo` 或 `image`（路径形如 `/img-btc/...`；应用会从 `/static` 提供）。
4. 也可通过 [产品提交 Issue 模板](.github/ISSUE_TEMPLATE/product-submit.md) 提交。

条目示例：

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

说明：

- `*_en` 为空时，英文界面会回退到主字段（`name`、`url` 等）。
- `logo` 非空时优先于 `image`。

## 目录结构

| 路径 | 用途 |
| --- | --- |
| `src/` | React 应用（`App.jsx`、组件、服务） |
| `public/data/` | 导航与标签 JSON |
| `public/static/img-btc/` | 资源 Logo |
| `.github/workflows/gh-pages.yml` | GitHub Pages 部署 |

## 许可证

本项目采用 MIT License。Copyright (c) 2025 BTCNAV.org。

全文见 [LICENSE](LICENSE)。

## 部署

推送到 `main` 后，会通过 [`.github/workflows/gh-pages.yml`](.github/workflows/gh-pages.yml) 构建并发布到 GitHub Pages。下方徽章显示该工作流的最新状态（不是部署按钮）：

[![Deploy to GitHub Pages](https://github.com/btc-nav/www/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/btc-nav/www/actions/workflows/gh-pages.yml)
