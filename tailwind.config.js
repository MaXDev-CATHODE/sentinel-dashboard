/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                sentinel: {
                    bg: '#0a0a0f',
                    panel: '#13131f',
                    accent: '#7c3aed', // Violet
                    success: '#10b981',
                    warning: '#f59e0b',
                    error: '#ef4444',
                    text: '#e2e8f0',
                    dim: '#94a3b8'
                }
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "monospace"],
                sans: ['Inter', 'system-ui', 'sans-serif']
            }
        },
    },
    plugins: [],
}
