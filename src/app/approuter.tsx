import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../pages/index';
import Development from '../pages/desenvolvimento';
import Cibersecurity from '../pages/ciberseguranca';
import Portfolio from '../pages/portfolio';
import About from '../pages/sobre-nos';
import Post2 from '../pages/posts/blockchain';
import Post1 from '../pages/posts/objetivos-do-site';
import NotFound from '../pages/404';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ciberseguranca" element={<Cibersecurity />} />
        <Route path="/desenvolvimento" element={<Development />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/posts/objetivos-do-site" element={<Post1 />} />
        <Route path="/posts/blockchain" element={<Post2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
