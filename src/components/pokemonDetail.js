import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const Detail = (props) => {
 
    return(
        <div key={props.index}>
            <h3>{props.name}</h3>

            <span>{props.stat}</span>
        </div>
        
     );
    
};

export default Detail


