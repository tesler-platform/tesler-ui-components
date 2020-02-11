const path = require("path")

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    webpackFinal: async config => {
        config.module.rules.push({
          test: /\.(ts|tsx)$/,
          include: path.resolve(__dirname, "../src"),
          use: [
              {
                loader: require.resolve('ts-loader'),
              },
              {
                  loader: require.resolve('react-docgen-typescript-loader'),
                  options: {
                    tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
                  }
              }
          ],
        })
        config.module.rules.push({
          test: /\.less$/,
          use: [
              { loader: 'style-loader' },
              { loader: 'css-loader', options: { modules: false } },
              { loader: 'less-loader', options: { javascriptEnabled: true }}
          ]
        })
        config.resolve.extensions.push('.ts', '.tsx');
        return config
    },
    addons: [
        '@storybook/addon-docs'
    ]
}
