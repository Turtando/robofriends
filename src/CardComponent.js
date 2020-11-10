import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import "./CardComponent.css"


const CardComponent = ({ id, name, email}) => {
    return (
        <Card className="cardCom hvr-grow shadow-lg bg-danger">
            <CardImg className="cardImg" src={`https://robohash.org/${id}`} alt="Robot Image" />
            <CardBody className="cardBody">
                <CardTitle tag="h5">{name}</CardTitle>
                <CardText>{email}</CardText>
            </CardBody>
        </Card>
    )
}

export default CardComponent;