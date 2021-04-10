import React from 'react';

import Card from './Card';

export default props => {
    const {minimo, maximo} = props;

    const dias = parseInt(Math.random() * (maximo - minimo)) + minimo;


    return (
        <Card green>
            <div>
                <p>Estarei em recesso em {dias} dias</p>
            </div>

        </Card>
    )
}