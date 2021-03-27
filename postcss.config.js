const tailwindVersion = process.env.NODE_ENV === 'production'
    ? 'tailwindcss'
    : '@tailwindcss/jit'

module.exports = {
    plugins: {
        [tailwindVersion]: {},
        autoprefixer: {},
    },
}
