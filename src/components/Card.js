import React from "react";
import "react-bootstrap";

function Card(props) {
    return (
        <div className="card">
            <img src={props.projectimg} className="card-img-top" alt="project_img"></img>
            <div className="card-body">
                <h5 className="card-title">{props.projecttitle}</h5>
                <div className="card-body">
                    <p>{props.projecttech}</p>
                </div>
                <p class="card-text">{props.prorojectdescription}</p>
            </div>
            <div class="card-body">
                <a href={props.deployedlink}>Deployed</a>
                <br></br>
                <a href={props.repolink}>Repo</a>
            </div>
        </div>

    );
}
export default Card;