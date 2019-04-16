import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { render } from 'react-snapshot';
import configureStore from './configureStore';

import AppContainer from './containers/App';

export const theme = createMuiTheme();
const store = configureStore();

const root = document.getElementById('root');

const renderApp = () => {
    render(
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <AppContainer />
            </MuiThemeProvider>
        </Provider>,
        root
    )
}

renderApp();