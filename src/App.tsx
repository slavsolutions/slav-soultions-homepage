import './App.css'
import Header from './components/Header/Header'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './theme';


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className='app-wrapper'>
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
