import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { getRoutes } from './config/routes';
import { Redirect } from 'react-router-dom';

function App() {
  //Get app routes -> config/routes.js
  const routes = getRoutes();
  //Checks if search is in progress
  const searching = useSelector((state) => state.searchState.searching);
  console.log(searching);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* Maps all routes */}
          {routes.map((route) => (
            <Route key={route.id} path={route.path} exact={route.exact}>
              {route.component}
            </Route>
          ))}
        </Switch>
        {/* If searching, redirects to searching */}
        {searching && <Redirect to="/searching" />}
        {/* If not any of above, redirects to home */}
        {!searching && <Redirect to="/" />}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
