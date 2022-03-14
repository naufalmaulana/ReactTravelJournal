import React from "react"

export default function Content(props){

    return(
        <div class="container">
            <div class="row justify-content-center align-items-center mb-3">
                <div class="col-md-4">
                    <img className="img-fluid rounded" src={props.imageUrl} alt=""/>
                </div>
                <div class="col-md-8">
                    <p><i class="bi bi-geo-alt-fill pin"></i> {props.location} <span><a className="maplinks" href={props.googleMapsUrl}>View on Google Maps</a></span></p>
                    <h1 class="fw-bold mb-3">{props.title}</h1>
                    <p class="fw-bold">{props.startDate}-{props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
            <div class="row">
                <hr></hr>
            </div>
        </div>
    )
}