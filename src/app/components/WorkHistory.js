import React from 'react'

import JobDetail from './JobDetail'

const WorkHistory = ({ workHistory }) => (
  <div className='work-history'>
      { workHistory &&
        workHistory.map(job =>
          <JobDetail {...{job}} />
        )
      }
  </div>
)

export default WorkHistory
