module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image-1': "url('/bgImage-1.jpg')",
        'bg-image-2': "url('/bgImage-2.jpg')",
      },
    },
  },
  variants: {
    extend: {
      brightness: ['group-hover'],
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

