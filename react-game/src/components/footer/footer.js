import React from 'react'

import './footer.scss'
import logo from './rs_school_js.svg'

const Footer = () => {
    return (
        <div className = 'footer d-flex justify-content-between'>
            <a href = 'https://github.com/Alena-Zykava'> Alena Zykava </a>
            <span>2021</span>
            <a href = 'https://rs.school/js/'>
                <img src = {logo} alt = 'RSS'/>
            </a>
        </div>
    )
}

export default Footer