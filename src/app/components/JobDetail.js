import React from 'react'

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap'

const JobDetail = ({
  job : {
    title,
    companyName,
    teamName,
    location,
    startDate,
    endDate,
    highlights
  }
}) => (
  <div className='job-detail'>
    <Card>
      <CardBody>
       <CardTitle>{title}</CardTitle>
        <CardSubtitle>{companyName}, {teamName} {location}</CardSubtitle>
      <CardSubtitle>{startDate} - {endDate}</CardSubtitle>
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

export default JobDetail
