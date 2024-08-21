import React from 'react';
import {ProjetoProvider} from '../Context/ProjetoProviders';
import Navigator from './Navigator';
import {UserProvider} from '../Context/UserProviders';

export default function Providers() {
  return (
    <UserProvider>
      <ProjetoProvider>
        <Navigator />
      </ProjetoProvider>
    </UserProvider>
  );
}
