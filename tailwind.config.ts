import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#09111f',
        slate: '#596579',
        mist: '#eef3f7',
        sand: '#f5f0e8',
        line: '#cfd8e3',
        brand: {
          DEFAULT: '#0f4c5c',
          deep: '#0a2d36',
          warm: '#c88a5d',
          soft: '#6ea7b4',
        },
      },
      fontFamily: {
        sans: ['Aptos', 'Segoe UI', 'Trebuchet MS', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        panel: '0 20px 60px rgba(9, 17, 31, 0.08)',
        float: '0 24px 80px rgba(15, 76, 92, 0.18)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(200, 138, 93, 0.18), transparent 32%), radial-gradient(circle at top right, rgba(110, 167, 180, 0.16), transparent 28%), linear-gradient(180deg, #f8fbfd 0%, #eef3f7 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config
