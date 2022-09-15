import React from 'react';
import ReactDOM from 'react-dom';



const Modal = ({header,content, actionButton, onDismiss}) => {
    // USING PORTAL FOR MODAL  OR  //Render a component not created by a react application
    return ReactDOM.createPortal(
        <div onClick={onDismiss} className='ui dimmer modals visible active'>
            <div onClick={(e)=> e.stopPropagation()} className='ui standard modal visible active'>
                <div className='header'>{header}</div>
                <div className='content'>{content}</div>
                <div className='actions'>
                    {actionButton}
                </div>
            </div>
        </div>

    , document.getElementById('modal'));

};

export default Modal;