// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header className="bg-dark text-white p-3">
        <h1>Podcast App</h1>
      </header>
      <main className="container mt-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
