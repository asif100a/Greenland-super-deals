/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto_serif: ['"Noto Serif", serif'],
        pt_serif: ['"PT Serif", serif'],
      },
    },
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ['bounce', 'heartBeat', 'fadeInUp']
    }
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-animatecss'),
  ],
}

