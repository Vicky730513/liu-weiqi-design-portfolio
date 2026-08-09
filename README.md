# 刘伟琪｜品牌与包装设计师作品集

基于 React 19 与 Vite 7 构建的个人设计作品集，包含品牌全案、包装设计、品牌与 IP、平面设计、视觉叙事及广告落地案例。

## 本地运行

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
npm run preview
```

构建输出目录为 `dist`。项目已包含 `vercel.json`，用于 Vite SPA 的路由回退和静态资源缓存。

## Vercel 配置

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Environment Variables: 无

## 发布流程

1. 将仓库推送至 GitHub。
2. 在 Vercel 选择 **Add New → Project**。
3. 导入该 GitHub 仓库，确认上述构建配置后部署。
4. 部署完成后使用 Vercel 提供的 `*.vercel.app` 免费地址访问。
