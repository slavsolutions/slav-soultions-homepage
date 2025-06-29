import { createGlobalStyle } from "styled-components"

export interface Theme {
    colors: {
      primary: string
      secondary: string
      background: string
      text: string
    }
  }
  
  export const defaultTheme: Theme = {
    colors: {
        primary: '#3178c6',
        secondary: '#FFF',
        background: '#faf9f8',
        text: '#000',
      },
  }

  export const darkTheme: Theme = {
    colors: {
      primary: '#3178c6',
      secondary: '#FFF',
      background: '#faf9f8',
      text: '#000',
    },
  }

  export const globalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik+Wet+Paint&display=swap');
  `
  