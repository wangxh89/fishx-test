import {
  FdxPlugin,
  LessPlugin,
  RouterPlugin
} from '@fishx/plugins';

const config = {
  title: 'fishx',
  plugins: [
    new FdxPlugin(),
    new LessPlugin({
      modifyVars: {
        //'@primary-color': '#40dc7e',
        // '@link-color': '#1DA57A',
        // '@border-radius-base': '10px',
      },
      options: {
        modules: true,
      },
      localIdentName: '[name]-[local]--[hash:base64:5]',
      javascriptEnabled: true,
    }),
    new RouterPlugin()
  ]
}

export default config
