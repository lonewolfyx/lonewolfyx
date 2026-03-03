import { intro, log, note, outro } from '@clack/prompts'
import { createMain, defineCommand } from 'citty'
import { description, name, version } from 'package.json'

interface IStack {
    label: string
    stacks: string[]
}

const stack: IStack[] = [
    {
        label: 'Frontend',
        stacks: [
            'JavaScript',
            'TypeScript',
            'Vue.js',
            'React',
            'Nuxt',
            'TailwindCSS',
        ],
    },
    {
        label: 'Backend',
        stacks: [
            'Node.js',
            'NestJS',
            'Python',
            'PHP',
        ],
    },
    {
        label: 'Runtime',
        stacks: [
            'Bun',
            'Pnpm',
            'Node',
        ],
    },
    {
        label: 'Tooling',
        stacks: [
            'Vite',
            'Rolldown',
            'Tsup',
            'TsDown',
            'Turbo',
        ],
    },
    {
        label: 'Database',
        stacks: [
            'PostgreSQL',
            'MySQL',
            'Redis',
        ],
    },
]

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
    run() {
        note(
            [
                'lonewolfyx',
                'Design Engineer',
                'Open Source Contributor',
            ].join(' · '),
            '$ whoami',
        )

        note(
            stack.map((s) => {
                return `> ${s.label.padEnd(10)} :: ${s.stacks.join(', ')}`
            }).join('\n'),
            '$ echo stack',
        )

        log.success('$ echo github\n https://github.com/lonewolfyx')
        log.success('$ echo website\n https://lonewolfyx.vercel.app')
    },
})

createMain(command)({})
