module.exports = {
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'post',
            dirname: 'posts',
            path: '/',
            itemPermalink: '/posts/:year-:month-:day-:slug',
            title: 'Home',
            pagination: {
              lengthPerPage: 3
            }
          }
        ],
        frontmatters: [
          {
            id: 'tag',
            keys: ['tag', 'tags'],
            path: '/tags/',
            layout: 'Tags',
            frontmatter: { title: 'Tags' },
            scopeLayout: 'Layout',
            pagination: {
              lengthPerPage: 2
            }
          }
        ]
      }
    ],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10
      }
    ],
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // All options of ts-loader
        }
      }
    ]
  ]
};
