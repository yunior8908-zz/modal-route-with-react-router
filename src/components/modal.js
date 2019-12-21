import React from 'react';
import { withRouter } from 'react-router-dom';
import './css/styles.css';

function Modal(props){
    console.log("yoo");
    return <div
        role="button"
        className="modal-wrapper"
        onClick={()=> props.history.goBack()}
    >
        <div 
            role="button"
            className="modal"
            onClick={e => e.stopPropagation()}
        >
            <p>CONTENT</p>

        </div>
    </div>
}

export default withRouter(Modal);