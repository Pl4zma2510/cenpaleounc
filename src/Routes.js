import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import UserPage from './Pages/userPage';
import AdminPage from './Pages/adminPage';
import RecordsPage from './Pages/recordsPage';

const PrivateRoute = ({ component: Component, ... rest}) => (
    <Route { ... rest} render={props => (
        localStorage.getItem('isLogado') === 'true' ? (
          <Component { ... props} />
      ) : (
          <Redirect to={{ pathname: '/'}} />
      )
    )} />
)


const Routes = () => (
    <BrowserRouter>
       <Switch>
       <PrivateRoute path="/admin" component={AdminPage} /> 
       <Route exact path="/" component={UserPage} /> 
       <PrivateRoute path="/records" component={RecordsPage} />
       </Switch>
    </BrowserRouter>
);

export default Routes;