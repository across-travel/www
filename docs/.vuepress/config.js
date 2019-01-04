let { rust } = require ('./category/rust.js')
let { reason } = require ('./category/reason.js')
let { awesome } = require ('./category/awesome.js')

module.exports = {
    title: 'OUISRC',
    description: '携手共建OUISRC中文网络',
    head: [
      ['link', { rel: 'icon', href: `/favicon.ico` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    theme: 'vue',
    themeConfig: {
        repo: 'ouisrc/ouisrc',
        docsDir: 'docs',
        logo: '/imgs/ouisrc.png',
        displayAllHeaders: true,
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新', 
        docsDir: 'docs',
        sidebarDepth: 0,
        search: true,
        searchMaxSuggestions: 11,
        nav: [
          { text: '阅读', items: [ 
            { text: '文章', link: '/read/article/' },
            { text: '社刊', link: '/read/ouisrc/' }
          ] },
          { text: '文档', items: [
              { text: '编程语言', items: [
                  { text: '深入Rust语言', link: '/rust/book/' },
                  { text: '深入Reason语言', link: '/reason/book/' }
                ]
              }
            ]
          },
          { text: '生态', items: [ 
            { text: 'Awesome', link: '/resourse/awesome/' },
            { text: 'Blogs', link: '/resourse/blogs/' },
            { text: '书签', link: '/resourse/mark/' },
            { text: '资源', link: '/resourse/resourse/' },
            { text: '网络', items: [ 
              { text: '知乎', link: '#' },
              { text: '思否', link: '#' },
              { text: '简书', link: '#' }      
            ] }
          ] },
          { text: '全栈', items: [ 
            { text: 'Linux', link: '/os/linux/' },
            { text: 'Bash', link: '/os/bash/' },
            { text: 'Web', link: '/w3c/webapi/' },
            { text: 'HTML', link: '/w3c/html/' },
            { text: 'CSS', link: '/w3c/css/' },
            { text: 'Ecmascript', link: '/w3c/ecmascript/' },
            { text: 'DBA', link: '/dba/dba' },
            { text: 'Postgresql', link: '/dba/postgresql/' },
            { text: 'Mongodb', link: '/dba/mongodb/' }
          ] },
          { text: '论坛', link: 'https://github.com/ouisrc/forum/issues' }
        ],
        sidebar: {
          '/rust/book/': rust('Rust'),
          '/reason/book/': reason('Rust'),
          '/resourse/awesome/': awesome('Awesome')
        }
    }
}

