# HuTingRong.UE - 个人作品集网站

## 项目概览
- **项目名称**: my-portfolio
- **类型**: 个人作品集/简历网页 (Next.js 静态站点)
- **定位**: 展示"技术型游戏交互设计师 (Technical UE)"的个人作品与专业能力
- **访问地址**: 本地开发 `http://localhost:3000`

## 技术栈
| 类别 | 技术 |
|------|------|
| 框架 | Next.js 16.1.6 (App Router) |
| UI库 | React 19 / React DOM 19 |
| 样式 | Tailwind CSS v4 (CSS-first 配置) |
| 语言 | TypeScript 5 |
| 代码规范 | ESLint 9 |
| 构建工具 | PostCSS |

## 目录结构
```
web-main/
├── src/app/
│   ├── page.tsx       # 主页面（包含所有页面组件）
│   ├── layout.tsx     # 根布局
│   └── globals.css    # 全局样式
├── public/            # 静态资源（图片等）
├── website_copy.md    # 网站文案手册（内容参考）
├── website_copy.md    # Figma 设计稿对应文案（备用）
├── package.json
├── next.config.ts
└── tsconfig.json
```

## 页面内容结构
按 `page.tsx` 中的顺序：

1. **Navigation** - 固定顶部导航栏，品牌名 `HuTingRong.UE`
2. **Hero Section** (#about) - 主视觉区，含主标题、副标题、CTA 按钮
3. **Philosophy Section** - 设计理念介绍
4. **Projects Bento Box** (#projects) - 工程赋能项目展示（2 个卡片）
5. **Design Output Cases** (#design) - 设计产出案例（Before/After 对比）
6. **Cross-Platform Section** - iOS 全栈项目展示
7. **Footer** - 版权信息

## 使用的图片资源
图片统一放在 `/public/images/` 目录下：
- `ps命名脚本.png`
- `快速规范命名工具.png`
- `识图与素材查找.png`
- `ue稿生成阶段性结果.png`
- `装备系统修改前.png`
- `替换.png`
- `iosapp.png`

## 开发命令
```bash
npm run dev    # 启动开发服务器
npm run build  # 构建生产版本
npm run start  # 启动生产服务器
npm run lint   # ESLint 检查
```

## Figma 设计稿
- **链接**: https://www.figma.com/design/wu5SaxupB5goA3BYmjV2NH
- **节点 ID**: 109-421
- **Token**: 已配置在本地 MCP (`figma-remote-mcp`)

## 设计风格
- 配色: 深色背景 (黑色) + 青色 (cyan-400) 为主色调 + 紫色 (purple-500) 为辅助色
- 字体: 黑体风格 (font-black)，大字号标题
- 布局: 大量留白、圆角卡片、背景光晕装饰
- 动效: hover 缩放过渡、ping 动画等

## 常用命令
- 重启开发服务器: `npm run dev`
- 添加新页面: 在 `src/app/` 下创建新目录和 `page.tsx`
- 修改全局样式: 编辑 `src/app/globals.css`