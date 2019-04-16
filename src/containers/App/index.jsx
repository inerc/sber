import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import GithubPage from '../GithubPage';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={GithubPage}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;