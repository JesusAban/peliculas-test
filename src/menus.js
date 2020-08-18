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
        header: "Películas",
        href: '/movies',
        icon: <Movie />
    },
    {
        header: "Estadísticos",
        href: '/statistics',
        icon: <Statistics />
    }
];