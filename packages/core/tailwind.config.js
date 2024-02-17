/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xl: '1440px',
        lg: '1280px',
        laptop: '1024px',
        md: '960px',
        xsm: '768px',
        sm: '600px',
        xs: '460px',
      },
      colors: {
        'neutral/10': '#201A1A',
        'neutral/35': '#595051',
        'neutral/50': '#7E7575',

        'grey/50': '#FAFAFA',
        'grey/100': '#EAEAEB',
        'grey/200': '#D5D6D7',
        'grey/300': '#BBBCBD',
        'grey/400': '#A1A2A4',
        'grey/500': '#96989A',
        'grey/600': '#838587',
        'grey/700': '#5D5F61',
        'grey/800': '#38393A',
        'grey/900': '#131313',

        'primary/100': '#DC3256',
        'primary/100/4': '#dc32560a',
        'primary/100/10': '#DC325619',

        'sys/light/disabled': '#1D1B20',
        'sys/light/surface-container-low': '#FFF5FB',

        'secondary/blue/50': '#F4FAFC',
        'secondary/blue/100': '#D1EDF4',
        'secondary/blue/200': '#A4DAE9',
        'secondary/blue/300': '#6AC3DB',
        'secondary/blue/400': '#32ACCD',
        'secondary/blue/500': '#2C99B6',
        'secondary/blue/600': '#26869F',
        'secondary/blue/700': '#1C6072',
        'secondary/blue/800': '#103944',
        'secondary/blue/900': '#061317',

        'secondary/green/50': '#F6FAF7',
        'secondary/green/100': '#DBEBDF',
        'secondary/green/200': '#B7D6BF',
        'secondary/green/300': '#8BBD97',
        'secondary/green/400': '#5EA36F',
        'secondary/green/500': '#539263',
        'secondary/green/600': '#498057',
        'secondary/green/700': '#345B3E',
        'secondary/green/800': '#1F3725',
        'secondary/green/900': '#0A120C',

        'secondary/yellow/50': '#FFFCF2',
        'secondary/yellow/100': '#FFF2CC',
        'secondary/yellow/200': '#FFE599',
        'secondary/yellow/300': '#FFD459',
        'secondary/yellow/400': '#FFC419',
        'secondary/yellow/500': '#FEBD00',
        'secondary/yellow/600': '#DEA500',
        'secondary/yellow/700': '#9F7600',
        'secondary/yellow/800': '#5F4700',
        'secondary/yellow/900': '#201800',

        'success/50': '#ECFDF5',
        'success/500': '#10B981',

        'error/50': '#FFEBF1',
        'error/100': '#FEE4E2',
        'error/500': '#E1004B',

        'warning/50': '#FFF1D6',
        'warning/500': '#EB9B00',

        'shades/black': '#222222',
        'shades/white': '#FFFFFF',
      },
      fontFamily: {
        default: [
          'Inter',
          'Roboto',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
    },
  },
  plugins: [],
};
