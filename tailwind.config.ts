import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        matisse: {
          '50': '#f3f7fc',
          '100': '#e5eff9',
          '200': '#c6def1',
          '300': '#93c3e6',
          '400': '#5aa4d6',
          '500': '#3488c3',
          '600': '#226599', // default color da PMV
          '700': '#1f5785',
          '800': '#1d4a6f',
          '900': '#1d3f5d',
          '950': '#13293e',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
