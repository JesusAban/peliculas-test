import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from './layouts/Layout';
import ErrorLayout from './layouts/Error';
import Overview from './views/Overview';

export default [
    {
      path: '/',
      exact: true,
      component: () => <Redirect to="/overview"/>
    },
    {
        path: '/errors',
        component: ErrorLayout,
        routes: [
        {
            path: '/errors/error-404',
            exact: true,
            component: lazy(() => import('src/views/Error404'))
        }]
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
                component: lazy(() => import('src/views/Movies/MovieDetails'))
            },
            {
                path: '/statistics',
                exact: true,
                component: lazy(() => import('src/views/Statistics'))
            },
            {
                component: () => <Redirect to="/errors/error-404" />
            }
        ]
    }
];
