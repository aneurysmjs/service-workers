import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar } from '@/components/core/Navbar';
import { Footer } from '@/components/core/Footer';

import { Home } from '@/pages/Home';

const Routing = () => (
  <Router>
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Footer />
    </div>
  </Router>
);

export default Routing;
