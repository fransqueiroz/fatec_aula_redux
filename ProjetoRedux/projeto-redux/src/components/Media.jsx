import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'

function Media(props){
    const {min, max} = props
    return (
        <Card title='Média dos números' green>
            <div>
                <span>
                    <strong>Resultado:</strong>
                    <strong>{ (min + max) / 2 }</strong>
                </span>
            </div>
        </Card>        
    )
}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media)