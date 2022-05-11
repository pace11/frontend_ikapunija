import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './routes'

export default function App() {
  return (
    <Router>
      <React.Fragment>
        {routes.map((route, idx) => (
          <Route
            key={String(idx)}
            path={route.path}
            exact={route.exact}
            component={(props) => (
              <route.layout {...props}>
                <route.component {...props} />
              </route.layout>
            )}
          />
        ))}
      </React.Fragment>
    </Router>
  )
}
