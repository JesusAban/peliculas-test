import React from 'react';
import PropTypes from 'prop-types';
//Components
import statistics from 'src/images/statistics.png';
import statisticsBlack from 'src/images/statisticsBlack.png';
//Styles
import './Icon.css';

function StatisticIcon (props){

    const { mobile } = props;

    return (
        <div className="Icon-Container">
            <img src={ mobile ? statisticsBlack : statistics } alt="Statistic" className="Icon" />
        </div>
    );
}

StatisticIcon.propTypes = {
    mobile: PropTypes.bool
};

StatisticIcon.defaultProps = {
    mobile: false
};


export default StatisticIcon;