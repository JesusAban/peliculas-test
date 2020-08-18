import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

function Error({ route }) {

  const LoadingMessage = () => (
    "I'm loading..."
  );

  return (
    <div className="Error-Container">
        <Suspense fallback={<LoadingMessage />}>
          {renderRoutes(route.routes)}
        </Suspense>
    </div>
  );
}

Error.propTypes = {
  route: PropTypes.object
};

export default Error;
