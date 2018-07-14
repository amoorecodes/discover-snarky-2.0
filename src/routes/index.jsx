import React from 'react';
import { Switch, Route } from 'react-router';
import Template from '../components/Template.jsx';
import Home from '../components/Home.jsx';
import Profile from '../components/Profile.jsx';

const createRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      {/* <Route path='' /> */}
      <Route path='/profile' component={ Profile } />
    </Switch>
    // <Route
    //   path='/'
    //   component={ Template }
    // >
    //   <IndexRoute
    //     component={ Home }
    //   />
    //   <Route
    //     path={'/profile'}
    //     component={ Profile }
    //   />
    // </Route>
  )
};

const Routes = createRoutes();

export default Routes;