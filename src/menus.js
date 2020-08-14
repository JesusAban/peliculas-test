import React from 'react';
import { 
    Movie, 
    Home, 
    Statistics 
} from 'src/components/Icons';

export default [
    {
        header: "Home",
        href: '/',
        icon: <Home />
    },
    {
        header: "Movies",
        href: '/movies',
        icon: <Movie />
    },
    {
        header: "Statistics",
        href: '/statistics',
        icon: <Statistics />
    }
];