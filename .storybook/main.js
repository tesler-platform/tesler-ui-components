module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        {
            name: '@storybook/preset-create-react-app',
            options: {
                tsDocgenLoaderOptions: {},
            },
        },
        '@storybook/addon-docs'
    ]
}
