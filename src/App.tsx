import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import * as Colors from './styles/colors';
import { SearchPage } from './search-page';
import { NotFoundPage } from './not-found-page';

function App() {
    return (
        <div style={{ background: Colors.lightGrey }}>
            <Router>
                <Switch>
                    <Route path="/search">
                        <SearchPage />
                    </Route>
                    <Redirect exact from={'/'} to="/search" />
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
