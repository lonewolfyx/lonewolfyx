const ESC = '\x1B'
const RESET = `${ESC}[0m`

const rgb = (r: number, g: number, b: number) => `${ESC}[38;2;${r};${g};${b}m`

const GRADIENT = [
    rgb(13, 148, 136),
    rgb(8, 145, 178),
    rgb(2, 132, 199),
    rgb(37, 99, 235),
    rgb(79, 70, 229),
    rgb(124, 58, 237),
]

export const gradientText = (text: string): string => {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        const colorIndex = Math.floor((i / text.length) * GRADIENT.length)
        // eslint-disable-next-line ts/ban-ts-comment
        // @ts-expect-error
        result += GRADIENT[colorIndex] + text[i]
    }
    return result + RESET
}
