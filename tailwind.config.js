module.exports = {
  content: [
    "./src/**/*.{html,ts,css}",
  ],
  theme: {
    extend: {
      colors:{
        primary_blue:'#2563eb',
        primary_tint:'#eff6ff',
        success_green:'#16a34a',
        warning_amber:'#f59e0b',
        danger_red:'#dc2626',
        primary: '#111827',
        secondary: '#6b7280',
        border:'#f3f4f6',
      },
      fontFamily:{
        primary:'Poppins, sans-serif',
        secondary:'Inter, sans-serif',
        font_display:'Space Grotesk, sans-serif',
        font_mono:'JetBrains Mono, monospace'
      }
    },
  },
  plugins: [],
}

