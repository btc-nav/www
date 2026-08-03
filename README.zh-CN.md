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

## 删除资源

1. 在对应分类的 JSON（`beginner.json` / `bitcoin.json` / `lightning.json` / `new-things.json`）中删除整条对象。
2. 若该条目有独立 logo 文件，且**没有其他条目引用同一路径**，可一并删除 `public/static/img-btc/` 下对应图片。
3. **一般不要**从 `tagList.json` 删除标签：即使某标签暂时没有条目，保留标签可避免侧边导航结构抖动；只有确认该标签永久弃用时再删。

## 约定（贡献 / Agent 都适用）

- **改动范围**：内容类变更默认只动 `public/data/*.json` 与 `public/static/img-btc/`；不要顺手改 `src/` 或构建配置，除非任务明确要求。
- **插入位置**：同一 `tag` 的条目应放在一起；新条目插在该标签已有条目附近（通常追加到该标签组末尾），不要打乱其他标签分组。
- **图片目录**：优先沿用同类目已有条目的子目录（如 `Community/`、`hot/`、`Software Wallet/`），不要新建风格不一致的文件夹名；路径含空格时与现有条目一样做 URL 编码（例如 `Bitcoin%20Optech.jpg`）。
- **字段与格式**：保持现有字段顺序与 **tab 缩进**；空的 `*_en` 可留空字符串（英文界面会回退到主字段）；`logo` 非空时优先于 `image`。
- **新标签**：先在 `tagList.json` 增加 `tag` / `tag_en` / `category`，且 `category` 必须对应四个分类之一（`beginner` | `bitcoin` | `lightning` | `new-things`），再在对应 JSON 里写条目。
- **完成标准**：改完后 JSON 必须可解析；有条件时跑一次 `yarn build` 确认构建通过。

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
