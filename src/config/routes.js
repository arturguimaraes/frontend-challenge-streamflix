import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect as RedirectRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from '../views/Search';
import Searching from '../views/Searching';
import ShowSearch from '../views/ShowSearch';
import Title from '../views/Title';
import NoResults from '../views/NoResults';
import NotFound from '../views/NotFound';
import Error from '../views/Error';

const ROUTES = [
  {
    component: <Search />,
    exact: true,
    id: 'search',
    path: '/',
    title: 'Search',
  },
  {
    component: <Searching />,
    id: 'searching',
    path: '/searching',
    title: 'Searching',
  },
  {
    component: <ShowSearch />,
    id: 'showSearch',
    path: '/showSearch',
    title: 'Show Search',
  },
  {
    component: <Title />,
    id: 'title',
    path: '/title',
    title: 'Title',
  },
  {
    component: <NoResults />,
    id: 'noResults',
    path: '/noResults',
    title: 'No Results',
  },
  {
    component: <Error />,
    id: 'error',
    path: '/error',
    title: 'Error',
  },
  {
    component: <NotFound />,
    id: 'notFound',
    title: 'Not Found',
  },
];

/* Maps all routes */
export function Routes() {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} exact={route.exact}>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
}

export function Redirect() {
  // Checks if search is in progress
  const { loading, data, error, typing } = useSelector((state) => state.searchState);
  //console.log(loading, data, error);
  
  /* If searching, redirects to searching */
  if (loading) return <RedirectRouter to="/searching" />;

  /* If typing, redirects to home */
  if (typing) return <RedirectRouter to="/" />;
  
  /* If error, redirects to error */ 
  else if (error) {
    console.log('Error fetching data from API:', error)
    return <RedirectRouter to="/error" />;
  }
  
  /* If found no results, redirects to no results */ 
  else if (data === 'Not found') return <RedirectRouter to="/noResults" />;

  /* If found results, redirects to title */ 
  else if (data != null && data !== 'Not found') return <RedirectRouter to="/title" />;

  /* If not any of below options, redirects to home */
  return <RedirectRouter to="/" />;
}

export function findRoute(path) {
  let foundRoute = ROUTES.find((route) => route.path === path);
  if (foundRoute === undefined) {
    foundRoute = ROUTES.find((route) => route.id === 'notFound');
  }
  return foundRoute;
}
