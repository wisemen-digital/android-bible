import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";

export default defineConfig({
  title: "The Android Bible",
  vite: {
    plugins: [
      SearchPlugin(),
    ]
  },
  srcDir: 'src',
  dir: 'src',
  cleanUrls: true,
  lastUpdated: true,
  description: "The Android Bible is our database of knowledge and best practices for Android development.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Team', link: '/team' },
    ],
    logo: '/Bible_logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/appwise-labs/Wisemen-Bible' }
    ]
  }
})