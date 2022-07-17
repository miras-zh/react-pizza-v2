import React from 'react';
import style from './not-found-box.module.scss';


function NotFoundBox(){
    return(
        <div className={style.root}>
            <span>🧰</span> <br />
            <h1>Not Found</h1>
        </div>
    )
}

export default NotFoundBox;