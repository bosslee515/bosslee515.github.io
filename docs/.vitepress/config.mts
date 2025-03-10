import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QinLi",
  description: "QinLiBlog",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: "qinli515@bjfu.edu.cn",
      //copyright: 'qinli515@bjfu.edu.cn'
    },
    sidebarMenuLabel:"Contact",
    logo: "/logo.svg",
    search: {
      provider: 'local'
    },
    //导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/pro1' },
      { text: 'Publications ', link: '/pub1' }
    ],

    //左侧边栏
    sidebar: [
      {
        text: 'Phone:+86-18504625283'
      },
      {
        text: 'Email:qinli515@bjfu.edu.cn'
      },
      { text: 'linkedin', link: 'https://www.linkedin.com/in/qin-li-54aa01283' },
      { text: 'instagram', link: 'https://www.instagram.com/zeifailaogeihei?igsh=MXJpOGh2NWRiamhsZQ%3D%3D&utm_source=qr' },
      {
        text: 'Beijing Forestry University',
        items: [

          { text: 'Tsinghua East Road NO. 35' },
          { text: 'Xueyuan Street' },
          { text: 'Haidian,Beijing,China' }

        ]
      },

      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/zeifailaogeihei?igsh=MXJpOGh2NWRiamhsZQ%3D%3D&utm_source=qr' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/qin-li-54aa01283' }
    ]
  }
})
