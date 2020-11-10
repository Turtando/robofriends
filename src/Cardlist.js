import React from "react"
import robotsJSON from "./robots.json"
import CardComponent from './CardComponent'
import { Container } from 'reactstrap'

const Cardlist = () => {
    const cardComp = robotsJSON.map((user, i) => {
        return <CardComponent id={robotsJSON[i].id} name={robotsJSON[i].name} email={robotsJSON[i].email} />
    })

    return (
        <Container>
            <div className="row col-sm-12">
                {cardComp}
            </div>
        </Container>
    )
}

export default Cardlist;