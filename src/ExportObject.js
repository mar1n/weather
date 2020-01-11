import React from 'react';
import cities from './cities';

class ExportObject extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <p>{cities.map((name) => <li>{name.name}{name.id}</li>)}</p>
        );
    }
}


export default ExportObject;