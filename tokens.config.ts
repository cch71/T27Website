import { defineTheme } from 'pinceau'

export default defineTheme({
  elements: {
    text: {
      secondary: {
        color: {
          static: {
            initial: '{color.gray.900}',
            dark: '#ADA9A4'
          }
        }
      }
    }
  },

  prose: {
    li: {
      margin: '5px '
    },

    table: {
      margin: '14px 0',
      lineHeight: '.6rem'
    }
  },

  docus: {
    header: {
      title: {
        fontSize: '1.2rem',
        fontWeight: '500'
      }
    }
  }
})