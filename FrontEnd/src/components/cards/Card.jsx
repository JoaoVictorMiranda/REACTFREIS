import React from 'react'
import './Card.scss'

const Card = ({ title, description }) => {
    return (
        <div>
            <div className="container_card">
                <div className="color">

                </div>
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card