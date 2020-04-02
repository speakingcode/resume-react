import React from 'react'

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap'

const CommunityEfforts = ({
  communityEfforts
}) => (
  <div className='community-efforts'>
    <Card>
      <CardBody>
        <ul>
          {
            communityEfforts.map(effort =>
              <li>{effort.description}</li>
            )
          }
        </ul>
    </CardBody>
    </Card>
  </div>
)

export default CommunityEfforts
