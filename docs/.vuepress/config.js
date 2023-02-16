module.exports = {
  title: '清晨沐风',
  description: '每多学一点知识, 就少写一行代码',
  theme: 'reco',
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  // 特效配置
  plugins: [
    ['sakura', {
      num: 10, // 默认数量
      show: true, //  是否显示
      zIndex: -1, // 层级
      img: {
        replace: false, // false 默认图 true 换图 需要填写httpUrl地址
      },
    }],
    ['cursor-effects', {
      size: 4, // size of the particle, default: 2
      shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }, ],
    ['@vuepress-reco/vuepress-plugin-pagation', {
      perPage: 18
    }],
    ['@vuepress-reco/extract-code'],
  ],
  markdown: {
    lineNumbers: true
  },
  // 主题配置
  themeConfig: {
    subSidebar: "auto",
    sidebarDepth: 4,
    lastUpdated: '上次更新',
    type: "blog",
    author: "潘程",
    logo: "/logo.png",
    authorAvatar: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    startYear: '2017',
    // seo
    head: [
      ['link', {
        rel: 'icon',
        href: '/favicon.ico'
      }],
      ['meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }],
      ['meta', {
        name: 'keywords',
        content: '潘程,博客,前端,vuepress'
      }],
      ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxx"; 
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`]
    ],
    // 顶部导航栏
    nav: [{
        text: "首页",
        link: "/",
        icon: 'reco-home'
      },
      {
        text: "关于",
        icon: 'reco-account',
        items: [{
            text: "简书",
            link: "https://www.jianshu.com/u/866d2b92dd92"
          },
          {
            text: "Github",
            link: "https://github.com/jamespch"
          },
          {
            text: "Gitee",
            link: "https://gitee.com/pc751724101"
          }
        ]
      }
    ],
    // 其他栏目配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        // text: "", // 默认文案 “分类”
      },
      socialLinks: [{
          icon: 'reco-zhihu',
          link: 'https://www.zhihu.com/people/feng-yu-jian-cheng-61-60'
        },
        {
          icon: 'reco-github',
          link: 'https://github.com/jamespch'
        },
        {
          icon: 'reco-juejin',
          link: 'https://juejin.cn/user/729731451337150'
        },
      ],
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认4
        // text: "标签", // 默认文案 “标签”
      },
    },

  }
}