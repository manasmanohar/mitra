module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        theme: {
            backdropFilter: {
                none: 'none',
                blur: 'blur(20px)',
            },
        },
        variants: {
            extend: {},
        },
        plugins: ['tailwind-filter-utilities'],
    },
}
