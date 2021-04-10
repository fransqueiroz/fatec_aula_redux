import './Card.css';
import React from 'react';

function getColor(props){
    if(props.red) return 'Red';
    if(props.blue) return 'Blue';
    if(props.green) return 'Green';
    if(props.purple) return 'Purple';
    return '';
}

function Header(props){
    const title = props.title;
    if(title){
        return(
            <div className="Header">
                <span className="Title">{title}</span>
            </div>
        )
    }
}


export default props => {
    return (
        <div className={`Card ${getColor(props)}`}>

            {Header(props)}
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}
