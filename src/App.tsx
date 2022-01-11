import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home';
import VoucherList from './pages/VoucherList';

const App = ():React.ReactElement => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vouchers/*" element={<VoucherList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
