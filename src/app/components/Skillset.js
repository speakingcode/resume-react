import React from 'react'

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap'

const Skillset = ({
  skillset
}) => (
  <div className='skillset'>
    <Card>
      <CardBody>
        <CardTitle>{ skillset.title } </CardTitle>
        <ul>
          {
            skillset.skills.map(skill =>
              <li>{skill}</li>
            )
          }
        </ul>
      </CardBody>
    </Card>
  </div>
)

export default Skillset
