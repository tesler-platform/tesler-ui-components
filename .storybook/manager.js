import {addons} from '@storybook/addons'
import {create} from '@storybook/theming/create'

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: 'Tesler UI',
        brandUrl: 'https://github.com/tesler-platform/tesler-ui'
    })
})
