module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      transformStyle: {
        '3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': '180deg',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    },
  ],
};
