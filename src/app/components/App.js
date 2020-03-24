import React from 'react';


import { useQuery } from '@apollo/react-hooks'
import { gql }      from 'apollo-boost'

import logo from './logo.svg';
import './App.css';

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

const App = () => {

  const { loading, error, data } = useQuery(RESUME_QUERY)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <div>
      {data.resume.title} - {data.resume.name}
      </div>
    </div>
  )
}

export default App;
