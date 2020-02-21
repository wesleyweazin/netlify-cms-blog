module.exports = {
  siteName: 'Designer',
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  templates: {
    Post: [{
      path: '/posts/:year/:month/:title',
    }]
  },
  plugins: [{
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    // fix paths
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['Post','Work'],
        coverField: 'cover'
      }
    },
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: {
          /* Options for `pug-plain-loader` */ },
        pugLoader: {
          /* Options for `pug-loader` */ }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        coverField: 'cover',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true,
          }
        },
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/works/**/*.md',
        typeName: 'Work',
        coverField: 'cover',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/shots/**/*.md',
        typeName: 'Shot',
        remark: {
          // remark options
        }
      }
    },
  ],
}