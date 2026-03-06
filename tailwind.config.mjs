/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#F2C4CE',
          soft:    '#FAE8EB',
          deep:    '#D4849A',
          muted:   '#F5D5DB',
        },
        ink: {
          DEFAULT: '#1C1618',
          mid:     '#5C4A50',
          light:   '#9C8A90',
        },
        line: '#EDD5D9',
        'off-white': '#FDFAFA',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
