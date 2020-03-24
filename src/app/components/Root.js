import React, { useReducer } from 'react'

import { ApolloProvider } from '@apollo/react-hooks';

import Context from '../context'
import reducer from '../reducer'

import App from "./App";

const Root = ({client}) => {
  const [state, dispatch] = useReducer(
    reducer,
    {
    }
  )

  return (
    <ApolloProvider
      client={client}
    >
      <Context.Provider
        value={[state, dispatch]}
      >
        <App />
      </Context.Provider>
    </ApolloProvider>
  )
}

export default Root
