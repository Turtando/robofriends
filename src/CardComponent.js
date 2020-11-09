import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./CardComponent.css"

const CardComponent = () => {
    return (
        <Card className="cardCom hvr-grow">
            <CardImg className="cardImg" src="https://robohash.org/a" alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    )
}

export default CardComponent;