import { reloadRoutes } from 'react-static/node'
import HtmlTemplate from './src/containers/HtmlTemplate'
import jdown from 'jdown'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import chokidar from 'chokidar'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  getSiteData: () => ({
    title: 'Just In Case | Doomsday Prepping Made Easy',
  }),
  getRoutes: async () => {
    const { posts } = await jdown('content')
    const featured = posts.filter(post => post.featured)
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          posts,
          featured
        }),
      },
      {
        path: '/posts',
        component: 'src/containers/PostsList',
        getData: () => ({
          posts,
          featured
        }),
        children: posts.map(post => ({
          path: `/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
            featured
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/PostsList',
        getData: () => ({
          posts,
          featured
        })
      },
    ]
  },
  webpack: (config, { defaultLoaders, stage }) => {
    let loaders = []

    if (stage === 'dev') {
      loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
          },
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/'] },
        },
      ]

      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        })
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
  Document: HtmlTemplate,
}
