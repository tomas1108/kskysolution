import type { Config } from 'tailwindcss';

const customColors = {
  'primary-custom': '#09183d',
  second: '#2e3b59',
  yellow: '#f2e4b5'
};

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'Tahoma', 'Arial', 'sans-serif']
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        'linear-gradient': 'var(--button-linear-gradient)',
        'chip-poker-10K': 'var(--chip-poker-10K)',
        'chip-poker-30K': 'var(--chip-poker-30K)',
        'chip-poker-50K': 'var(--chip-poker-50K)',
        'chip-poker-100K': 'var(--chip-poker-100K)',
        'chip-poker-500K': 'var(--chip-poker-500K)',
        'chip-poker-1M': 'var(--chip-poker-1M)',
        'dark-900': '#1A1A1A',
        'dark-800': '#2C2C2C',
        'gray-700': '#3D3D3D',
        'gray-600': '#4E4E4E',
        'gold-500': '#D4AF37',
        'gold-400': '#FFD700',
        'gold-600': '#B8860B',
        ...customColors
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #f2ecb6, #a96f44)'
      },
      dropShadow: {
        'chip-poker-10K': '0 35px 35px var(--chip-poker-10K)',
        'chip-poker-30K': '0 35px 35px var(--chip-poker-30K)',
        'chip-poker-50K': '0 35px 35px var(--chip-poker-50K)',
        'chip-poker-100K': '0 35px 35px var(--chip-poker-100K)',
        'chip-poker-500K': '0 35px 35px var(--chip-poker-500K)',
        'chip-poker-1M': '0 35px 35px var(--chip-poker-1M)'
      },
      aspectRatio: {
        '616/466': '616 / 466'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
