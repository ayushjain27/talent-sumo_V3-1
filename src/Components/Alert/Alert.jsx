import React from 'react';
import { Link } from 'react-router-dom';

const Alert = (props) => {
    return (
        <>
            <div className='sticky-top'>
                {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    {props.alert.msg} : <strong> <Link to="/form" target="_blank">{(props.alert.msgg)}</Link></strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
            </div>
        </>
    )
}

export default Alert;