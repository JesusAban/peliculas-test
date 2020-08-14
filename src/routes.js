import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from './layouts/Layout';
import Overview from './views/Overview';


export default [
    {
      path: '/',
      exact: true,
      component: () => <Redirect to="/overview"/>
    },
    {
        route: '*',
        component: Layout,
        routes: [
            {
                path: '/overview',
                exact: true,
                component: Overview
            },
            {
                path: '/movies',
                exact: true,
                component: lazy(() => import('src/views/Movies'))
            },
            {
                path: '/movies/:id',
                exact: true,
                component: lazy(() => import('src/views/Movies/MoviesDetails'))
            },
            {
                path: '/statistics',
                exact: true,
                component: lazy(() => import('src/views/Statistics'))
            }
        ]
    }
];
