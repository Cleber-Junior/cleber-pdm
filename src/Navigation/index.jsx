import React from 'react';
import {ProjetoProvider} from '../Context/ProjetoProviders';
import Navigator from './Navigator';
import {UserProvider} from '../Context/UserProviders';
import {ApiProvider} from '../Context/ApiProvider';

export default function Providers() {
  return (
    <UserProvider>
      <ApiProvider>
        <ProjetoProvider>
          <Navigator />
        </ProjetoProvider>
      </ApiProvider>
    </UserProvider>
  );
}
