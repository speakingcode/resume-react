import React from 'react'

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap'

const Educations = ({
  educations
}) => (
  <div className='educations'>
    {
      educations.map(edu =>
      <Card>
        <CardBody>
          <CardTitle>
            {edu.degree}, {edu.department}
          </CardTitle>
          <CardText>
            { edu.institution }, { edu.year }
          </CardText>
        </CardBody>
      </Card>

      )
    }
  </div>
)

export default Educations
