/** @type {import('tailwindcss').Config} */
import { withTV } from 'tailwind-variants/transformer';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = withTV({
  darkMode: ['class'],
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.{js,jsx,ts,tsx}',
    './node_modules/@inertiaui/modal-react/src/**/*.{js,jsx}'
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      slg: '850px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      '3xl': '1550px',
      '4xl': '1700px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {
      fontFamily: {
        sans: ['Figtree', ...fontFamily.sans],
        primary: ['Playfair Display', 'serif'],
        secondary: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        custom: ['azzawilafont', 'sans-serif'],
        banner: ['spartan', 'sans-serif']
      },
      colors: {
        light: 'hsl(var(--light))',
        dark: 'hsl(var(--dark))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        toggle: 'hsl(var(--toggle))',
        bg: 'hsl(var(--bg))',
        fg: 'hsl(var(--fg))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          fg: 'hsl(var(--primary-fg))',
          50: 'hsl(204.7 99% 97%)',
          100: 'hsl(206.15 100% 92%)',
          200: 'hsl(206.57 99% 86%)',
          300: 'hsl(204.41 100% 77%)',
          400: 'hsl(206.02 100% 66%)',
          500: 'hsl(210.99 100% 57.99%)',
          600: 'hsl(215.79 98% 52%)',
          700: 'hsl(218.8 90% 48%)',
          800: 'hsl(220.35 84% 40%)',
          900: 'hsl(218.91 76% 33%)',
          950: 'hsl(220.26 68% 21%)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          fg: 'hsl(var(--secondary-fg))'
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
          fg: 'hsl(var(--tertiary-fg))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          fg: 'hsl(var(--accent-fg))',
          subtle: 'hsl(var(--accent-subtle))',
          'subtle-fg': 'hsl(var(--accent-subtle-fg))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          fg: 'hsl(var(--success-fg))'
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          fg: 'hsl(var(--info-fg))'
        },
        danger: {
          DEFAULT: 'hsl(var(--danger))',
          fg: 'hsl(var(--danger-fg))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          fg: 'hsl(var(--warning-fg))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          fg: 'hsl(var(--muted-fg))'
        },
        overlay: {
          DEFAULT: 'hsl(var(--overlay))',
          fg: 'hsl(var(--overlay-fg))'
        }
      },
      borderRadius: {
        '3xl': 'calc(var(--radius) + 7.5px)',
        '2xl': 'calc(var(--radius) + 5px)',
        xl: 'calc(var(--radius) + 2.5px)',
        lg: 'calc(var(--radius))',
        md: 'calc(var(--radius) - 2.5px)',
        sm: 'calc(var(--radius) - 5px)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' }
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        marquee: 'marquee var(--animation-duration) linear infinite'
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animated'),
    function ({ addUtilities }) {
      addUtilities({
        '.pause': {
          'animation-play-state': 'paused'
        }
      });
    }
  ]
});

export default config;
