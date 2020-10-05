import React, { Component }  from 'react';
import './App.css';
import Main from './components/mainComponent';
import {BrowserRouter} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme/theme';

import {Provider} from 'react-redux'
import {configStore} from './redux/configStore'

const store = configStore()

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    

      chapters : [
        
      ]
    }


  }

  

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
          <CssBaseline />
          <div>
            <Main/>
          </div>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;