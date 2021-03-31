import React from 'react';

import Card from './Card';

export default props => {

    const {min, max} = props;

    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <strong>Resultado:</strong>
                    <strong> {(min + max) / 2} </strong>
                </span>
            </div>
        </Card>
    )
}

