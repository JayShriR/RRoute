import React, { useState } from "react";

function Card ({ id, image, info, price, name, removeTour }){
    const [readMore, setReadMore] = useState(false);
    const description = `${info.substring(0, 200)}....`;

    const readMoreHandler = () => {
        setReadMore(!readMore);
    };

    return (
        <div className="card">
            <img src={image} alt={name} className="image" />
            <div className="tour-info">
                <div className="tour-detail">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {readMore ? info : description}
                    <span onClick={readMoreHandler} className="read-more">
                        {readMore ? 'Show Less' : 'Read More'}
                    </span>
                </div>
            </div>
            <button onClick={() => removeTour(id)} className="btn-red">
                Not Interested
            </button>
        </div>
    );
};

export default Card;
