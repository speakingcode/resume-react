import React from 'react'

import StartupDetail from './StartupDetail'

const StartupExperience = ({ startupExperience }) => (
  <div className='startup-experience'>
      { startupExperience &&
        startupExperience.map(startup =>
          <StartupDetail {...{startup}} />
        )
      }
  </div>
)

export default StartupExperience
