/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue"
  ],
  darkMode: "class",
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
      primaryDark:'#01004E',
      error: '#BA1A1A',
      primaryBg:'#E1DFFA',
      primaryBgText:'#00006E',
      primaryButtonBg:'#BFC2FF',
      transparent: "transparent",
      current: "currentColor",
      light: "#edf2f7",
      dark: "#0D102D",
      white: "#ffffff",
      black: "#000000",
      "grayer": "#edf2f7",
      primary: {
        0:'#000000',
        10:'#00006E',
        20:'#0000AC',
        30:'#1D24D3',
        40:'#3D46EA',
        50:'#5A64FF',
        60:'#7C84FF',
        70:'#9DA3FF',
        80:'#BFC2FF',
        90:'#E0E0FF',
        95:'#F1EFFF',
        99:'#FFFBFF',
        100:'#FFFFFF',
      },
      secondary: {
        0:'#000000',
        10:'#001C38',
        20:'#00325B',
        30:'#004880',
        40:'#0060A8',
        50:'#0079D1',
        60:'#0094FD',
        70:'#69AFFF',
        80:'#A1C9FF',
        90:'#D3E4FF',
        95:'#EAF1FF',
        99:'#FFFBFF',
        100:'#FFFFFF',
      },
      tertiary: {
        0:'#000000',
        10:'#050765',
        20:'#202578',
        30:'#383E8F',
        40:'#5056A9',
        50:'#696FC4',
        60:'#8389E0',
        70:'#9EA4FD',
        80:'#BFC2FF',
        90:'#E0E0FF',
        95:'#F1EFFF',
        99:'#FFFBFF',
        100:'#FFFFFF',
      },
      error: {
        0:'#000000',
        10:'#410002',
        20:'#690005',
        30:'#93000A',
        40:'#BA1A1A',
        50:'#DE3730',
        60:'#FF5449',
        70:'#FF897D',
        80:'#FFB4AB',
        90:'#FFDAD6',
        95:'#FFEDEA',
        99:'#FFFBFF',
        100:'#FFFFFF',
      },
      neutral: {
        0:'#000000',
        10:'#1B1B1F',
        20:'#303034',
        30:'#47464A',
        40:'#5F5E62',
        50:'#78767A',
        60:'#929094',
        70:'#ADAAAF',
        80:'#C8C5CA',
        90:'#E5E1E6',
        95:'#F3EFF4',
        99:'#FFFBFF',
        100:'#FFFFFF',
      },
      neutralVariant: {
        0:'#000000',
        10:'#1B1B23',
        20:'#303038',
        30:'#46464F',
        40:'#5E5D67',
        50:'#777680',
        60:'#918F9A',
        70:'#ACAAB4',
        80:'#C7C5D0',
        90:'#E4E1EC',
        95:'#F2EFFA',
        99:'#FFFBFF',
        100:'#FFFFFF',
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
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
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
  plugins: [
  ],
}