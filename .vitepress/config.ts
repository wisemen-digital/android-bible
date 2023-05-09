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
    sidebar: [
          { text: 'Tools', link: '/tools'},
          { text: 'Project structure', link: '/project-structure'},
          { text: 'Design patterns', link: '/design-patterns'},
          { text: 'Android Core', link: '/android-core'},
          { text: 'Testing', link: '/testing'},
          { text: 'Jetpack Compose', link: '/jetpack-compose'},
          { text: 'Research topics', link: '/research-topics', items: [
              { text: 'Dependency Injection', link: '/research-topics/dependency-injection' },
              { text: 'Maintenance Mode', link: '/research-topics/maintenance-mode' }
            ]
          },
          { text: 'Teamwork', link: '/teamwork'},
          { text: 'Reusable Code', link: '/reusable-code'}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/appwise-labs/Wisemen-Bible' }
    ]
  }
})