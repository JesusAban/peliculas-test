import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
//Routes
import { renderRoutes } from 'react-router-config';
//Components
import Header from 'src/components/Header';
import Container from 'src/views/Container';
import MenuSideBar from 'src/components/MenuSideBar';

function Layout ({ route }){

    const LoadingMessage = () => (
        "Cargando..."
    );

    return (
        <>
            <MenuSideBar />
            <Header/>
            <Container>
                <Suspense fallback={<LoadingMessage />}>
                    {renderRoutes(route.routes)}
                </Suspense>
            </Container>
        </>
    );
}

Layout.propTypes = {
    route: PropTypes.object
};

export default Layout;