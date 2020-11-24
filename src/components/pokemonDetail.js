import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const Detail = (props) => {
 
    return(
        <div key={props.index}>
            <span className="span-strong">{props.name}: </span>

            <span className="span-strong">{props.stat}</span>
        </div>
        
     );
    
};

export default Detail


