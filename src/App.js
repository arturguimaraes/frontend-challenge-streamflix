import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { getRoutes } from './config/routes';

function App() {
  const routes = getRoutes();

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} exact={route.exact}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
