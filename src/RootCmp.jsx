import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { Homepage } from './pages/Homepage';
import { socketService } from './services/socket.service';

export function RootCmp() {
  return (
    <main className='main-app-layout flex'>
      <Homepage />
    </main>
  );
}
