import React from 'react'
import '../components/css/MainscreenHeader.css'

function MainscreenHeader() {
    return (
        <div className="header">
        <h1>Overview</h1>
        <div className="header__button">
            <button className="btn__menu"><svg width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.258 0.870086L21.4741 0.870087L21.4741 5.08619L17.258 5.08619L17.258 0.870086ZM8.82581 0.870086L13.0419 0.870086L13.0419 5.08619L8.82581 5.08619L8.82581 0.870086ZM0.393599 0.870086L4.6097 0.870086L4.6097 5.08619L0.393598 5.08619L0.393599 0.870086Z" fill="#9DADB9"/>
</svg>
</button>
            <button className="btn__add">Add</button>
        </div>
    </div>
    )
}

export default MainscreenHeader
