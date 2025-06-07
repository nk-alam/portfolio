import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
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
				// Cyberpunk theme colors
				matrix: {
					green: '#00FF41',
					dark: '#003311',
				},
				cyber: {
					pink: '#FF0080',
					purple: '#8B5CF6',
				},
				electric: {
					blue: '#00D4FF',
					dark: '#0066CC',
				},
				terminal: {
					black: '#000000',
					dark: '#0D1117',
					white: '#F0F6FC',
				},
				warning: '#FF6B35',
			},
			fontFamily: {
				'mono': ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
				'display': ['Orbitron', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'matrix-fall': {
					'0%': {
						transform: 'translateY(-100vh)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				},
				'glitch': {
					'0%, 100%': {
						transform: 'translate(0)',
						filter: 'hue-rotate(0deg)'
					},
					'20%': {
						transform: 'translate(-2px, 2px)',
						filter: 'hue-rotate(90deg)'
					},
					'40%': {
						transform: 'translate(-2px, -2px)',
						filter: 'hue-rotate(180deg)'
					},
					'60%': {
						transform: 'translate(2px, 2px)',
						filter: 'hue-rotate(270deg)'
					},
					'80%': {
						transform: 'translate(2px, -2px)',
						filter: 'hue-rotate(360deg)'
					}
				},
				'scan-line': {
					'0%': {
						transform: 'translateY(-100%)'
					},
					'100%': {
						transform: 'translateY(100vh)'
					}
				},
				'typing': {
					'0%': {
						width: '0'
					},
					'100%': {
						width: '100%'
					}
				},
				'blink': {
					'0%, 50%': {
						opacity: '1'
					},
					'51%, 100%': {
						opacity: '0'
					}
				},
				'progress-fill': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: 'var(--progress-width)'
					}
				},
				'neon-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 5px #00FF41, 0 0 10px #00FF41, 0 0 15px #00FF41'
					},
					'50%': {
						boxShadow: '0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'matrix-fall': 'matrix-fall 3s linear infinite',
				'glitch': 'glitch 0.3s ease-in-out infinite',
				'scan-line': 'scan-line 2s linear infinite',
				'typing': 'typing 3s steps(40, end)',
				'blink': 'blink 1s infinite',
				'progress-fill': 'progress-fill 2s ease-out forwards',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
