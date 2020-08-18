import React from 'react';
//Components
import Card from 'src/components/Card';
import CardHeader from 'src/components/Card/CardHeader';
import H1 from 'src/components/Typography/H1';

function Overview(){
    return (
        <Card>
            <CardHeader>
                <H1 text="Estadísticos"></H1>
            </CardHeader>
        </Card>
    );
}

export default Overview;