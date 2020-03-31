import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { gql }      from 'apollo-boost'

import {
    Card
    , CardBody
}                   from 'reactstrap'

import Summary      from './Summary'
import WorkHistory  from './WorkHistory'
import StartupExperience  from './StartupExperience'

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
  if (error) return <p>Error :(</p>;

  const { resume } = data

  return(
    <Card>
      <CardBody>
      <Summary
        name    = { resume.name }
        title   = { resume.title }
        summary = { resume.summary }
      />

      <WorkHistory
        workHistory={ resume.workHistory }
      />
      <StartupExperience
        startupExperience={ resume.startupExperience}
      />

      </CardBody>
    </Card>
  )
}

export default Resume
