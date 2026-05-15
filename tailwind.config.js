/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        // CloudsForge brand — used on the /cloudsforge case study
        cf: {
          orange: '#D45D13',
          yellow: '#F3BC47',
          bg: '#060609',
          surface: '#0d0d15',
          'surface-2': '#12121c',
        },
      },
      fontFamily: {
        // Monospace — technical micro-labels on the /cloudsforge case study
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        // Conic gradient utility — used by the lamp light beams
        'gradient-conic':
          'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
      },
      animation: {
        'meteor-effect': 'meteor 5s linear infinite',
        'aurora-drift': 'aurora-drift 10s ease-in-out infinite',
        'card-slide-up': 'card-slide-up 0.65s ease-out both',
        'scan-sweep': 'scan-sweep 1.8s ease-in-out both',
        'logo-flash': 'logo-flash 1.5s ease-in-out 1 forwards',
        'splash-progress': 'splash-progress 1.5s linear 1 forwards',
        'beam-glow': 'beam-glow 4s ease-in-out infinite',
        'beam-pulse': 'beam-pulse 4s ease-in-out infinite',
        'cf-grain': 'cf-grain 0.7s steps(2) infinite',
        'cf-reveal': 'cf-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'star-btn': 'star-btn calc(var(--duration) * 1s) linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
