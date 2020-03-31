import React from 'react'

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap'

const StartupDetail = ({
  startup : {
    title,
    companyName,
    location,
    startDate,
    endDate,
    highlights
  }
}) => (
  <div className='startup-detail'>
    <Card>
      <CardBody>
       <CardTitle>{title}, {startDate} - {endDate}</CardTitle>
        <CardSubtitle>{companyName}, {location}</CardSubtitle>
      <CardSubtitle></CardSubtitle>
        <ul>
          {
            highlights.map(highlight =>
              <li>{highlight}</li>
            )
          }
        </ul>
    </CardBody>
    </Card>
  </div>
)

export default StartupDetail
