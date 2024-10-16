import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { Dashboard } from './Dashboard';


function App() {
  return {
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  </Router>;
}
  ;
};
}

export default App;
