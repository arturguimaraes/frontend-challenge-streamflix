import React from 'react';
import Search from '../views/Search';
import Searching from '../views/Searching';
import ShowSearch from '../views/ShowSearch';
import Title from '../views/Title';
import NoResults from '../views/NoResults';
import NotFound from '../views/NotFound';

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
    component: <NotFound />,
    id: 'notFound',
    title: 'Not Found',
  },
];

export function getRoutes() {
  return ROUTES;
}

export function findRoute(path) {
  let foundRoute = ROUTES.find((route) => route.path === path);
  if (foundRoute === undefined) {
    foundRoute = ROUTES.find((route) => route.id === 'notFound');
  }
  return foundRoute;
}
