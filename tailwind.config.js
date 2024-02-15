/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    screens: {
      'xxs':{
        'max': '374px'
      },
      'xs': {
        'min': '375px',
        'max': '575px'
      },
      'sm': {
        'min': '576px',
        'max': '767px'
      },
      'md': {
        'min': '768px',
        'max': '991px'
      },
      'lg': {
        'min': '992px',
        'max': '1199px'
      },
      'xl': {
        'min': '1200px',
        'max': '1399px'
      },
      '2xl': {
        'min': '1400px',
        'max': '1640px'
      },
      '3xl': {
        'min': '1641px'
      },
      'mobile': {
        'max': '767px'
      },
      'tablet': {
        'min': '768px',
        'max': '991px'
      },
      'desktop': {
        'min': '992px'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      primary: '#F9B233',
      secondary: '#EAF7E1',
      transparent: "transparent",
      current: "currentColor",
      light: "#edf2f7",
      graylight: "#DDDDDD",
      dark: "#0D102D",
      white: "#ffffff",
      black: "#000000",
      accent: "#8358FF",
      yellow: "##ecc94b",
      "grayer": "#edf2f7",
      "accent-dark": "#7444FF",
      "accent-light": "#9E7CFF",
      "accent-lighter": "#B9A0FF",
      "light-base": "#F5F8FA",
      orange: "#FEB240",
      "orange-bright": "#FA6D1E",
      red: "#EF4444",
      blue: "#428AF8",
      jacarta: {
        base: "#5A5D79",
        50: "#F4F4F6",
        100: "#E7E8EC",
        200: "#C4C5CF",
        300: "#A1A2B3",
        400: "#7D7F96",
        500: "#5A5D79",
        600: "#363A5D",
        700: "#131740",
        800: "#101436",
        900: "#0D102D"
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a'
      },
      orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e'
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210'
      },
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d'
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365'
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b'
      },
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      3.75: '0.925rem',
      4: '1rem',
      4.5: '1.15rem',
      5: '1.25rem',
      5.5: '1.40rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      92: '22rem',
      94: '24.2rem',
      96: '26.2rem',
      98: '28.2rem',
      100: '30.2rem',
      102: '32.2rem',
      104: '34.2rem',
      106: '36.2rem',
    },
    boxShadow: {
      none: "none",
      sm: "0px 1px 2px 0px rgba(13, 16, 45, 0.1)",
      base: "0px 1px 2px -1px rgba(13, 16, 45, 0.1), 0px 2px 4px 0px rgba(13, 16, 45, 0.1)",
      md: "0px 2px 4px -2px rgba(13, 16, 45, 0.1), 0px 4px 6px -1px rgba(13, 16, 45, 0.1)",
      lg: "0px 4px 6px -4px rgba(13, 16, 45, 0.1), 0px 10px 15px -3px rgba(13, 16, 45, 0.1)",
      xl: "0px 8px 10px -6px rgba(13, 16, 45, 0.1), 0px 20px 25px -5px rgba(13, 16, 45, 0.1)",
      "2xl": "0px 25px 50px -12px rgba(13, 16, 45, 0.1), 0px 12px 24px 0px rgba(13, 16, 45, 0.1)",
      "accent-volume": "5px 5px 10px rgba(108, 106, 213, 0.25), inset 2px 2px 6px #A78DF0, inset -5px -5px 10px #6336E4",
      "white-volume": "5px 5px 10px rgba(108, 106, 212, 0.25), inset 2px 2px 6px #EEF1F9, inset -5px -5px 10px #DFE3EF",
      "inner": "inset 0px 1px 2px rgba(13, 16, 45, 0.1)",
      "outline": "0px 0px 0px 3px rgba(13, 16, 45, 0.1)",
      "outline-white": "0px 0px 0px 3px rgba(255, 255, 255, 0.1)",
      "outline-black": "0px 0px 0px 3px rgba(13, 16, 45, 0.1)",
    },
    fontSize: (theme) => ({
      "3xs": ["0.500rem", {
        lineHeight: "normal"
      }],
      xxs: ["0.625rem", {
        lineHeight: "normal"
      }],
      xs: ["0.75rem", {
        lineHeight: "normal"
      }],
      "2xs": ["0.8125rem", {
        lineHeight: "normal"
      }],
      sm: ["0.875rem", {
        lineHeight: "normal"
      }],
      base: ["1rem", {
        lineHeight: "normal"
      }],
      md: ["1.125rem", {
        lineHeight: "normal"
      }],
      lg: ["1.25rem", {
        lineHeight: "1.5"
      }],
      xl: ["1.5rem", {
        lineHeight: "normal"
      }],
      "2xl": ["1.75rem", {
        lineHeight: "normal"
      }],
      "3xl": ["2rem", {
        lineHeight: "normal"
      }],
      "4xl": ["2.25rem", {
        lineHeight: "normal"
      }],
      "5xl": ["2.5rem", {
        lineHeight: "normal"
      }],
      "6xl": ["3.5rem", {
        lineHeight: "normal"
      }],
      "7xl": ["4.25rem", {
        lineHeight: "normal"
      }],
      ...theme('spacing')
    }),
    extend: {
      fontFamily: {
        'circular': ['Circular', 'sans-serif'],
      },
      borderRadius: {
        "2lg": "0.625rem",
        "2.5xl": "1.25rem"
      },
      transitionProperty: {
        height: "height",
        width: "width"
      },
      animation: {
        fly: "fly 6s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        marquee: "marquee 60s linear infinite",
        marqueeRight: "marqueeRight 60s linear infinite",
        heartBeat: "heartBeat 1s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
        progress: "progress 5s linear",
        "spin-slow": "spin 10s linear infinite",
        gradient: "gradient 6s linear infinite",
        gradientDiagonal: "gradientDiagonal 6s linear infinite"
      },
      keyframes: {
        fly: {
          "0%, 100%": {
            transform: "translateY(5%)"
          },
          "50%": {
            transform: "translateY(0)"
          }
        },
        marquee: {
          "0%": {
            transform: "translateX(0)"
          },
          to: {
            transform: "translateX(-2322px)"
          }
        },
        marqueeRight: {
          "0%": {
            transform: "translateX(-2322px)"
          },
          to: {
            transform: "translateX(0)"
          }
        },
        heartBeat: {
          "0%, 40%, 80%, 100%": {
            transform: "scale(1.1)"
          },
          "20%, 60%": {
            transform: "scale(.8)"
          }
        },
        progress: {
          "0%": {
            width: "0%"
          },
          "100%": {
            width: "100%"
          }
        },
        gradient: {
          "100%": {
            backgroundPosition: "200% center"
          }
        },
        gradientDiagonal: {
          "100%": {
            backgroundPosition: "200% center"
          }
        }
      },
      zIndex: {
        "60" : "60",
        "70" : "70",
        "80" : "80",
        "90" : "90",
        "99" : "99",
        "100" : "100",
        '100': '100',
        '500': '500',
        '999': '999',
        '9999': '9999',
        '99999': '99999',
        '999999': '999999'
      },
      colors:{
      
      }
    },
    customGroups: {
      names: ["dropdown"]
    }
  },
  plugins: [],
}