import { intro, outro } from '@clack/prompts'
import { createMain, defineCommand } from 'citty'
import { description, name, version } from 'package.json'

const command = defineCommand({
    meta: {
        name,
        version,
        description,
    },
    setup() {
        intro('Hi')
    },
    cleanup() {
        outro('welcome review my info')
    },
    run({ args }) {
        console.log(args)
    },
})

createMain(command)({})
