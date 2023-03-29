import React from 'react';
import { Homepage } from './pages/Homepage';

export function RootCmp() {
  return (
    <main className='main-app-layout flex'>
      <h1>Hello world!</h1>
      <Homepage />
    </main>
  );
}
