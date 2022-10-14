import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Routes, Redirect } from './config/routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
        <Redirect />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
