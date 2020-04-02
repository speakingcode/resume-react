import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { gql }      from 'apollo-boost'

import {
    Card
    , CardBody
    , Collapse
}                   from 'reactstrap'

import { useToggle } from '../hooks/useToggle'

import Summary      from './Summary'
import WorkHistory  from './WorkHistory'
import StartupExperience  from './StartupExperience'
import CommunityEfforts   from './CommunityEfforts'
import Skillset     from './Skillset'
import Educations   from './Educations'

const RESUME_QUERY = gql`
query {
  resume {
    id
    name
    summary
    title
    website
    github
    stackOverflow
    workHistory {
      id
      title
      companyName
      startDate
      endDate
      highlights
      location
      teamName
    }
    startupExperience {
      id
      companyName
      title
      startDate
      endDate
      url
      location
      highlights
    }
    communityEfforts {
      id
      description
      date
      url
    }
    skillsets {
      id
      skills
      title
    }
    educations {
      degree
      department
      institution
      year
    }
  }
}`

const Resume = () => {
  const { loading, error, data} = useQuery(RESUME_QUERY)

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error :(</p>;

  const { resume } = data

  return(
      <>
        <Summary
          name    = { resume.name }
          title   = { resume.title }
          summary = { resume.summary }
        />

        <WorkHistory
          workHistory = { resume.workHistory }
        />

        <StartupExperience
          startupExperience = { resume.startupExperience }
        />

        <CommunityEfforts
          communityEfforts = { resume.communityEfforts }
        />

        { resume.skillsets.map(skillset =>
            <Skillset
              skillset = { skillset }
            />
          )
        }

        <Educations
          educations = { resume.educations }
        />
      </>
  )
}

export default Resume
