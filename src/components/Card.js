import React from 'react'

function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img  src={props.imgsrc} className=" imgl card-img-top" alt="Nothing" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <a href={props.link} className="btn btn-primary  btn-dark">Search Exercise</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card