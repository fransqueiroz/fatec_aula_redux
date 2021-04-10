import React from 'react';

import Card from './Card';

export default props => {
    return (
        <Card title={props.title} blue>
            <div>
                <p>{props.aluno} sua nota é: {props.nota}</p>
            </div>

        </Card>
    )
}