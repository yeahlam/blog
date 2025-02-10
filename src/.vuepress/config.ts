import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "浓情咖啡的blog",
  description: "关烨林",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
