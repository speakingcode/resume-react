import React from 'react'

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap'

const Summary = ({ name, title, summary}) => (
  <div className='summary'>
    <Card>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{title}</CardSubtitle>
      <CardText>
        {summary}
      </CardText>
    </CardBody>
    </Card>
  </div>
)

export default Summary
