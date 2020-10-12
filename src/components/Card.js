import React from "react";
import "react-bootstrap";
import { Col } from "react-bootstrap";

function Card(props) {
    return (

        <Col className="col-lg-4 col-12">
            <div class="card">
                <img src={props.projectimg} className="card-img-top" alt="project_img"></img>
                <div className="card-body">
                    <h4 className="card-title">{props.projecttitle}</h4>
                    <p>{props.projecttech}</p>
                    <p class="card-text">{props.projectdescription}</p>
                    <a href={props.deployedlink}>Deployed</a>
                    <br></br>
                    <a href={props.repolink}>Repo</a>
                </div>
            </div>
        </Col>


    );
}
export default Card;