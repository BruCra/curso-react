import { ThemeProvider, createTheme } from '@mui/material/styles';



import { MainRouting } from './routes/MainRouting';




function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <MainRouting/>

    </ThemeProvider>
    </>
  )
}

export default App
