/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        muted: {
          DEFAULT: "hsl(220, 10%, 18%)",
          foreground: "var(--muted-foreground)",
        },
        border: "var(--border)",
        card: {
          DEFAULT: "var(--card)",
          elevated: "var(--card-elevated)",
        },
        steel: "var(--steel)",
      },
      fontFamily: {
        display: ['"Saira Condensed"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
      animation: {
        'chain-move': 'chainLoop 20s linear infinite',
      },
      keyframes: {
        chainLoop: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '200px 0' },
        }
      }
    },
  },
  plugins: [],
}
