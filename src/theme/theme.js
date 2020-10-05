import { createMuiTheme }  from '@material-ui/core/styles'


const theme = createMuiTheme({
  palette: {
    
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: '#ff9800', 
      contrastText: "#ffffff" 
    },
  },
  
});
export default theme