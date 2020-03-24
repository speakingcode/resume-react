import React                 from 'react'
import ReactDOM              from 'react-dom'


import { createApolloClient }      from "./createApolloClient"

import Root                        from "./app/components/Root"

import './index.css';


const client = createApolloClient()

ReactDOM.render(
  <Root
    {...{client}}
  />,
  document.getElementById('root')
);
